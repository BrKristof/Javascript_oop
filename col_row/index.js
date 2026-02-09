/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 */
import data from "./data.json" with {type:'json'}
import { Manager } from "./manager.js"
import { Table } from "./table.js"

const manager = new Manager()
manager.addCallback = (author) => (console.log(author))


for(const a of data.colspanDataArr){
    
    manager.addElement(a)
}


new Table(data.colspanDataArr, manager)

