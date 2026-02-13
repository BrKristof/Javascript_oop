import { Manager } from "./manager.js"
/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 */

class FormController{

    #manager

    /**
     * @type {FormField}
     */
    #formfieldElemList
    /**
     * 
     * @param {FormFieldType[]} formfields 
     * @param {Manager} manager 
     */
    constructor(formfields, manager){

        this.#manager = manager
        const form = document.createElement('form')
        document.body.appendChild(form)
         this.#formfieldElemList= []
        for(let formfield of formfields){
            const formfieldElem = new FormField(formfield.id, formfield.label, formfield.name, formfield.required, form )
            this.#formfieldElemList.push(formfieldElem)
        }
        //ide kellenek majd a bemeneti mezők
        const button = document.createElement('button')
        button.innerText = "submit"
        form.appendChild(button)

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            //valtozó létrehozása a beviteli mező alapján
            //hozzáadjuk a managerhez
            const elem = this.#CreateElem();
            if(elem){
                this.#manager.addElement(elem)
                e.target.reset()
            }
            
        })



    }

    /**
     * @type {ColspanType[] | {RowspanType[] | null}}
     */
    #CreateElem(){
        let result = []
        let valid = true
        for(const formInput of this.#formfieldElemList){

            if(formInput.validate()){
                result[formInput.name] = formInput.value
            }
            else{
                valid = false
            }
            

            /**
             * result: (neve: input tartalom, kor: input tartalom...)
             */
        }
        return result
    }
}

class FormField{
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {string}
     */
    #name
    /**
     * @type {HTMLDivElement}
     */
    #error
    /**
     * @type {boolean}
     */
    #required

    get name(){
        return this.#name
    }

    get value(){
        return this.#input.value ? this.#input.value : undefined;
    }
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id,label,name,required,parent){
        const div = document.createElement('div')
        parent.appendChild(div)
        
        const labelElement = document.createElement('label')
        labelElement.innerText = label
        div.appendChild(labelElement)
        
        const br = document.createElement('br')
        div.appendChild(br)

        const input = document.createElement('input')
        input.id = id
        this.#name = name
        input.name = name
        this.#input = input
        div.appendChild(input)

        const errordiv = document.createElement('div')
        errordiv.classList.add("error")
        this.#error = errordiv
        div.appendChild(errordiv)
        

        this.#required = required

    }

    validate(){
        let result = true
        if(this.#required && !this.value){
           this.errordiv.innerText = "kötelező a mező kitöltése"
           result = false
        }
        else{
            this.errordiv.innerText = ""
        }
        return result
    }
}

export {FormController}