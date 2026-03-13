class QuizManager{

    /**
     * @type {number}
     */
    #currentQuestionNum
    /**
     * @type {}
     */
    #questions

    /**
     * @type {string[]}
     */
    #questionAnswers

    /**
     * @type {}
     */
    #nextQuestionCallback

    /**
     * @type {}
     */
    finishResultCallback

    /**
     * 
     * @param {} questions 
     */
    constructor(questions){
        this.#currentQuestionNum = 0
        this.#questionAnswers = []
        this.#questions = questions
    }


}

class QuestionType{

    /**
     * @type {string}
     */
    #question

    /**
     * @type {string[]}
     */
    #answers

    /**
     * @type {string}
     */
    #rightAnswer
}