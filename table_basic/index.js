/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)


class Table{

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * @param {HeaderType[]} headArray 
     */
    constructor(headArray){

        this.#tbody = makeTableBodyWithHeader(headArray)

    }
}

class ColspanTable extends Table{

    /**
     * 
     * @param {HeaderType[]} headArray 
     */
    constructor(headArray){

        super(headArray)
    }

    /**
     * 
     * @param {ColspanRowType[]} ColspanRowType 
     */
    render(ColspanRowType){

        renderColspanBody(this.tbody,ColspanRowType)
    }

}

const colTable = new ColspanTable(colspanHeaderArr)
colTable.render(colspanBodyArr)

class RowspanTable extends Table{

    /**
     * 
     * @param {HeaderType[]} headArray 
     */
    constructor(headArray){

        super(headArray)
    }

    /**
     * @type {RowspanRowType[]}
     */
    render(RowspanRowType){

        renderRowspanBody(this.body,RowspanRowType)
    }

}

const rowTable = new RowspanTable(rowspanHeaderArr)
rowTable.render(rowspanBodyArr)

/**
 * 
 * @param {string} text 
 */
function button(text){

    const button = document.createElement('button')
    button.innerText = text

    document.body.appendChild(button)

    return button
}

const vmi = button("rowspan elem hozzáadása")
vmi.addEventListener()

