import { Muvelet,MelyikMuvelet } from "./functions"


const input  = document.createElement('input')
const input2  = document.createElement('input')

const button = document.createElement('button')
button.innerText = "végrehajtás"

const div = document.createElement('div')

document.body.appendChild(input)
document.body.appendChild(input2)
document.body.appendChild(button)
document.body.appendChild(div)

button.addEventListener('click', function(){
    
    const n1 = Number(input.value)
    const n2 = Number(input2.value)

    const {result} = Muvelet(n1,n2, MelyikMuvelet("+") )
    div.innerText = result
})



