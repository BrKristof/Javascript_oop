/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * @param {import {  callbackType} from "./manager.js";}
 */
import data from "./data.json" with {type:'json'}
import { FormController } from "./form.js"
import { Manager } from "./manager.js"
import { Table } from "./table.js"

const renderTableBody = (tbody,elem) => {
    
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = document.createElement('td')
    td.innerText = elem.neve
    tr.appendChild(td)

    const td2 = document.createElement('td')
    td2.innerText = elem.kor
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = elem.szerelme1
    tr.appendChild(td3)

    if(elem.szerelme2){
         const td4 = document.createElement('td')
        td4.innerText = elem.szerelme2
        tr.appendChild(td4)
    }
    else{
        td3.colSpan = 2
    }
}

const manager = new Manager()
const table = new Table(data.colspanHeaderArray, manager)

table.setAppendRow((tbody, elem) => {
    renderTableBody(tbody,elem)
})
for(const a of data.colspanDataArr){
    
    manager.addElement(a)
}

const form  = new FormController(data.colspanFormFieldList, manager);













//rowspanra ugyanezt kell csinalni

