import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewelement.js";

class FormController extends ViewElement{

    /**
     * @type {AuthorManager}
     */
    #manager

    /**
     * @type {FormInput[]}
     */
    #formInputList

    /**
     * 
     * @param {string} id 
     * @param {import(./index.js).formFieldType[]} formfieldList 
     * @param {AuthorManager} manager 
     */
    constructor(id,formfieldList,manager){
        super(id)
        this.div.innerText = "Form"
        this.#manager = manager
        this.#formInputList = []
        const form = document.createElement("form")
        for(const e of formfieldList){
            const formInput = new FormInput(e.id,e.label,e.name, form)
            this.#formInputList.push(formInput)
        }
        const button = document.createElement('button')
        button.innerText = "Küldés"
        form.appendChild(button)
        const resultDiv = document.createElement('div')
        resultDiv.innerText = "Eredmény"
        this.div.appendChild(resultDiv)
        this.div.appendChild(form)

        form.addEventListener('submit', (e)=> {
            e.preventDefault()
            const element = this.#createElement()
            this.manager.addElement(element)
            e.target.reset()

        })

        this.#manager.addElementResultCallback = (result) => {
            resultDiv.innerText = result
            setTimeout(() =>{
                resultDiv.innerText = ''
            },1500)
        }
    }

    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement(){

        /**
         * @type {import("./index.js").AuthorType}
         */
        let result = {}
        for(const e of this.#formInputList){
            if(e.validate()){
                result[e.name] = e.value
            }
            
        }
        return result
    }
}


class FormInput{

    /**
     * @type {HTMLInputElement}
     */
    #inputElement

    /**
     * @type {HTMLDivElement}
     */
    #errordiv

    /**
     * @type {string}
     */
    #name

    get value(){
        return this.#inputElement.value ? this.#inputElement.value : undefined
    }

    get name(){
        return this.#name
    }

    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {HTMLElement} parent 
     */
    constructor(id,label,name,parent){
        const {input,errorDiv} = createInputAndErrorDiv({id,label,name,parent})
        this.#name = name
        this.#inputElement = input
        this.#errordiv = errorDiv

    }

    validate(){
        let result = true
        if(this.value){
            this.#errordiv.innerText = "Ez a mező kötelező"
            result = false
        }
        else{
            this.#errordiv.innerText = ""
        }
        return result
    }
}

export {FormController}
