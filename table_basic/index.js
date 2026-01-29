/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * 
 * @callback renderRowCallback
 * @param {HTMLTableSectionElement}
 * @returns {void}
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

    get tbody(){

        return this.#tbody
    }

    appendRow(callback){

        callback(this.#tbody)
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


const rowbutton = createButton('gomb','rowspan elem hozzáadása')
rowbutton.addEventListener('click', onClickRow.bind(rowTable))

// rowbutton.addEventListener('click',function(){

//     const rowObj = {

//         author: 'Appolliniare',
//         title1: "A megsebzett galamb és a szökőkút",
//         concepts1: "képvers", 
//         title2: "Búcsú",
//         concepts2: "avantgárd" 
//     }

//     rowTable.appendRow(function(tbody){

//         for(const a of rowObj){

//             const tr2 = document.createElement('tr')
//             tbody.appendChild(tr2) 

//             const td = document.createElement('td')
//             td.innerText = a.author
//             tr2.appendChild(td)
            

//             const td2 = document.createElement('td')
//             td2.innerText = a.title1
//             tr2.appendChild(td2)
            

//             const td3 = document.createElement('td')
//             td3.innerText = a.concepts1
//             tr2.appendChild(td3)
            
//             if(a.title2 != undefined && a.concepts2 != undefined){

//                 const tr3  = document.createElement('tr')
//                 tbody.appendChild(tr3)

//                 const td4 = document.createElement('td')
//                 td4.innerText = a.title2
//                 tr3.appendChild(td4)

//                 const td5 = document.createElement('td')
//                 td5.innerText = a.concepts2
//                 tr3.appendChild(td5)

//                 td.rowSpan = '2'

//             }

//         }
//     }
// )})

function onClickRow(e){

    e.preventDefault

    const rowObj = {

        author: 'Appolliniare',
        title1: "A megsebzett galamb és a szökőkút",
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    }

    this.appendRow(function(body){

        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2) 

        const td = document.createElement('td')
        td.innerText = rowObj.author
        tr2.appendChild(td)
            

        const td2 = document.createElement('td')
        td2.innerText = rowObj.title1
        tr2.appendChild(td2)
            

        const td3 = document.createElement('td')
        td3.innerText = rowObj.concepts1
        tr2.appendChild(td3)
            
        if(rowObj.title2 != undefined && rowObj.concepts2 != undefined){

            const tr3  = document.createElement('tr')
            tbody.appendChild(tr3)

            const td4 = document.createElement('td')
            td4.innerText = rowObj.title2
            tr3.appendChild(td4)

            const td5 = document.createElement('td')
            td5.innerText = rowObj.concepts2
            tr3.appendChild(td5)

            td.rowSpan = '2'

        }

    })
    
    

}

const colbutton = createButton('gomb2','colspan elem hozzáadása')

// a gomszab.js valamier hibat dob

/**
 * 
 * @param {string} id 
 * @param {string} text 
 * @returns {HTMLButtonElement}
 */
function createButton(id,text){

    const button = document.createElement('button')
    button.id = id
    button.innerText = text

    document.body.appendChild(button)

    return button

}
