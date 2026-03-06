import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { ViewElement } from "./viewelement.js";
import { AuthorManager } from "./manager.js";

class Table extends ViewElement{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    /**
     * @type {AuthorManager}
     */
    #manager

    /**
     * 
     * @param {string} id 
     * @param {string[]} headArray 
     * @param {AuthorManager} manager 
     */
    constructor(id, headArray, manager){
        super(id)
        this.#manager = manager
        const table = document.createElement('table')
        this.div.appendChild(table)
        const thead = createTableHeader(headArray)
        table.appendChild(thead)
        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)
        this.#manager.tableCallback = (authorList) => {
            for(const e of authorList){
                const tr = document.createElement('tr')
                this.#tbody.appendChild(tr)

                createTableCell(tr,e.name,)
                createTableCell(tr,e.work)
                createTableCell(tr,e.concept)
            }
        }
    }
}

export {Table}