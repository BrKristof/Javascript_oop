/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * 
 * 
 * @callback callbackType
 * @param {(ColspanType[] | RowspanType[])} obj
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
    */
    #dataArray

    /**
     * @type {callbackType}
     * 
     * egy functiont tárol el
     */
    #addCallback

    // inicializáljuk a dataArrayt egy listának
    constructor(){
        this.#dataArray = []
    }

    /**
     * @param {ColspanType[] | RowspanType[]} elem 
     * 
     * hozzáad egy elemet a dataArray-hez
     * ha a #addCallback-nek van értéke akkor az meghívja az adott elemre
     */
    addElement(elem){
        
        this.#dataArray.push(elem)
        if(this.#addCallback){
            this.#addCallback(elem)
        }
    }

    /**
     * @param {callbackType} call
     * 
     * beállítja a callback értékét
     */
    set addCallback(call){
        this.#addCallback = call
    }
}


export {Manager}