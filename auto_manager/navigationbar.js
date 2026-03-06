import { ViewElement } from "./viewelement.js";
import { createRadioButton } from "./gomszab.min.js";

class Navbar extends ViewElement{

    /**
     * @type {ViewElement[]}
     */
    #viewElemList

    constructor(){
        super('navbar')
        this.div.addEventListener('change', (e) =>{
            const selectedRadioButton = e.target.value
            this.activate(selectedRadioButton)
        })
        this.#viewElemList = []
    }

    /**
     * 
     * @param {string} label 
     * @param {viewElement} viewElement 
     */
    addViewElement(label, viewElement){
        this.#viewElemList.push(viewElement)
        const div = createRadioButton({id : viewElement.id, name: this.id, label: label})
        this.div.appendChild(div)
    }

    /**
     * @override
     * @param {string} value 
     */
    activate(value){
        this.div.querySelector(`#${value}`).checked = true
        for(const viewElement of this.#viewElemList){
            viewElement.activate(value)
        }
    }
}

export {Navbar}