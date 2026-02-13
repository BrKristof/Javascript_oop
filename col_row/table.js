/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * 
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */

import { Manager } from "./manager.js"

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    /**
     * @type {Manager}
     */
    #manager

    /**
     * 
     * @param {HeaderArrayType} HeaderArray 
     * @param {Manager} manager 
     */
    constructor(HeaderArray,manager){

        this.#manager = manager
        const table = document.createElement('table')
        document.body.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        const tr = document.createElement('tr')
        thead.appendChild(tr)

        for(let e of HeaderArray){
            
            const th = document.createElement('th')
            th.innerText = e.name
            if(e.colSpan) {
                th.colSpan = e.colSpan
            }
            tr.appendChild(th)
        }

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)
        this.#tbody = tbody


    }

    /**
     * @param {TableCallback}
     */
    setAppendRow(tableCallback){
        this.#manager.addCallback = (element) =>
        {
            tableCallback(this.#tbody, element)
        }
    }

}

export {Table}