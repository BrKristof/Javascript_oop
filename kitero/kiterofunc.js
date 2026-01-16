function Student(name){

    this.name = name
    this.askedQuestion = 0

}

Student.prototype.askQuestion = function(){
    
    console.log('???')
    this.askedQuestion++
}

function StudentWithWork(name){

    Student.call(this,name)
    this.workDone = 0
}

StudentWithWork.prototype.doWork = function(){

    this.workDone++
}

Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype)

const stu1 = new Student('K')
const stu2 = new Student('B')

console.log(stu1)
console.log(stu2)

stu1.askQuestion()

console.log(stu1)

const stu3 = new StudentWithWork('O')

stu3.askQuestion()

console.log(stu3)

stu3.doWork()

console.log(stu3)


