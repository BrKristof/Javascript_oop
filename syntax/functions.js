const Muvelet = function(a,b, callback){
    const result = callback(a,b)
    return {result}
}


const MelyikMuvelet = (jel) => {
    if(jel == "+"){
        return (a,b) => {return a + b}
    }
}

export{Muvelet,MelyikMuvelet}