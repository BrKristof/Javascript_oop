// class Plate{

//     constructor(color){

//         this.color = color


//     }

// }

// class BigPlate extends Plate{

//     constructor(color){

//         super(color)
//         this.size = "big"
//         this.count = 0
//     }

//     addNum(){
        
//         this.count++
//     }
// }

// class SmallPlate extends Plate{

//     constructor(color){

//         super(color)
//         this.size = "small"
//         this.count = 0

//     }

//     addNum(){
        
//         this.count++
//     }
// }

// const big1 = new BigPlate("red")
// big1.addNum()
// console.log(big1)

// const sm1 = new SmallPlate("blue")
// sm1.addNum()
// console.log(sm1)


// const sm2 = new SmallPlate("green")
// sm2.addNum()
// console.log(sm2)


// class Glass{

//     constructor(color){

//         this.color = color
//     }
// }

// const gls = new Glass("yellow")
// console.log(gls)


//---------------------------------------------------------------------

function Plate(color){

    this.color = color

}

function BigPlate(color){

    Plate.call(this,color)

}

function SmallPlate(color){

    Plate.call(this,color)

}

Object.setPrototypeOf(BigPlate.prototype, Plate.prototype)
Object.setPrototypeOf(SmallPlate.prototype, Plate.prototype)

const big1 = new BigPlate("red")
console.log(big1)

const sm1 = new SmallPlate("blue")
console.log(sm1)


const sm2 = new SmallPlate("green")
console.log(sm2)


// ez volt a feladat tanár úr?
//a (has a) pontosan mit takar?
//azon kívül hogy összekapcsoltam őket mást is kellett volna csinálnom?

