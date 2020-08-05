const questionsList = [
    {
        question: "Who was the messenger of the gods?",
        answers: {
            1: 'Hermes',
            2: 'Telegram',
            3: 'Whatsup',
            4: 'FB messanger'
        },
        correct: '1'
    }, 
    {
        question: "What sport is featured in the video game “FIFA”?",
        answers: {
            1: 'Tennis',
            2: 'Volleyball',
            3: 'Football',
            4: 'Carting'
        },
        correct: '3'
    }, 
    {
        question: "What does Au stand for in the periodic table?",
        answers: {
            1: 'Still',
            2: 'Silver',
            3: 'Gold',
            4: 'Aluminium'
        },
        correct: '3'
    }, 
    {
        question: "What is the capital city of Iceland?",
        answers: {
            1: 'Berlin',
            2: 'Saint-Petersburg',
            3: 'Amsterdam',
            4: 'Rekyavik'
        },
        correct: '4'
    },
]  


class Questions {
    constructor( question, answers, correctness) {
        
        this.question = question;
        this.answers = answers;
        this.correctness = correctness;
        this.usedQuestions = []
       
    }
    randomQuestionIndex(min, max) {
        let randInd = Math.floor(Math.random() * (max - min) + min) ;
        this.randomQuestion(randInd)
       return randInd
        
    }
    avoidUsingAskedQuestion() {

        this.usedQuestions.push(this.randInd)
        return this.usedQuestions;
    }
    randomQuestion(randInd) {
        this.question = question[randInd];
        this.avoidUsingAskedQuestion();
        return this.question;
        
    }

    prepareNextQuestion() {
        if (!this.usedQuestions.includes(this.questionIndex)) {
            this.question = this.question[this.questionIndex]
        } 
        if (this.usedQuestionsIndexes.length === questionsList.length) {
            alert('you used all questions!')
        }
    }
    checkCorrectAnswer() {
        if (this.answers.key === this.correctness) {
            alert('this is correct!')
        }
    }

} 

const questionObject = new Questions(questionsList.question, questionsList.answers, questionsList.correct)
//console.log(question(questionsList.question, questionsList.answers, questionsList.correct));
console.log(questionObject.randomQuestionIndex(0, questionsList.length));
console.log(questionsList[questionObject.randomQuestionIndex(0, questionsList.length)])
console.log(questionObject.randomQuestion())