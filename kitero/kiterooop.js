class Student{

    constructor(name){

        this.name = name
        this.askedQuestionNum = 0

    }

    askQuestion(){
        
        console.log('???')
        this.askedQuestionNum++
    }

    
}

class StudentWithWork extends Student{

    constructor(name){

        super(name)
        this.workDone = 0
    }

    DoWork(){

        this.workDone++
    }
}

const stu1 = new Student('K')
stu1.askQuestion()
console.log(stu1)

const stu2 = new StudentWithWork("B")
stu2.askQuestion()
stu2.DoWork()
console.log(stu2)