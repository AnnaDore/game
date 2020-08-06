//hello-section
//greeting on the 1st screen
//track the input
let greetingButton = document.getElementsByClassName('name-btn')[0]
let inputName = document.getElementById('stranger-name');
let parentGreetingElement = document.getElementsByClassName('hello-section')[0]
let startBtn = document.createElement('button')

//check that a user put the name
function strangerNameLength() {
   return inputName.value.length;
} 
//what to show if the name was added
function addPAndStartButton() {
  let p = document.createElement('p')
  p.appendChild(document.createTextNode(`${inputName.value}! I have a nice game for you! If you wanna play - click the Start button!`))
  parentGreetingElement.appendChild(p)
  //let startBtn = document.createElement('button')
  parentGreetingElement.appendChild(startBtn)
  startBtn.classList.add('start-btn')
  startBtn.innerHTML = 'LET\'S GO!!'
  return startBtn

}
//if a user submitted the input by Enter
function greetAfterKeypress(event) {
  if (strangerNameLength() > 0 && event.keyCode === 13) {
    addPAndStartButton();
   // let letgoButton = document.getElementsByClassName('start-btn')[0]
  } else if (event.keyCode === 13) {
    alert('please, put your name');
  }
}
//if a user submitted the unput by clicking the button 
function greetAfterClick() {
  if (strangerNameLength() > 0) {
    addPAndStartButton();
   // let letgoButton = document.getElementsByClassName('start-btn')[0]
    
  } else {
    alert('please, put your name');
  }
}  
//add listeners to greet a user
inputName.addEventListener('keypress', greetAfterKeypress)
greetingButton.addEventListener('click', greetAfterClick)

//add listener for the start button
startBtn.addEventListener('click', function() {
  addQuizSection();
}) 



//working with the new elements in the quiz page
let bannerSectionQuiz = document.createElement('div')
let bannerParent = document.getElementsByClassName('parent-section')[0]

//after click of the start button -  generate the 1st section of the game
function addQuizSection() {
  let bodyParent = document.querySelector('body')
  //create a background image
/*   bannerSectionQuiz.classList.add('banner-quiz')
  bannerParent.appendChild(bannerSectionQuiz); */
  quizHolers();
}

//generate the questions and answers holders
let questionHolder = document.querySelector('#question-container');
let quizSection = document.getElementsByClassName('quiz')[0]

function quizHolers() {
  quizSection.classList.toggle('hide')
  
}

/* class Question {
  constructor(question) {
    this.question = question.question
    this.answers = question.answers
    this.correct = question.correct
  }

  checkAnswer(answer) {
    if(answer === this.correct) {
      return true
    } else {
      return false
    }
}
} */
class Quiz {
  constructor(questions,question, answers, correctness) {
      this.questions = questions;
      this.question = question;
      this.answers = answers;
      this.correctness = correctness;
      this.score = 0;
      this.usedQuestions = [];
      this.index = 0;
  }
  provideQuestion() {
    this.question = this.questions[this.index].question;
    this.answerOne = this.questions[this.index].answers[1];
    this.answerTwo = this.questions[this.index].answers[2];
    this.answerThree = this.questions[this.index].answers[3];
    this.answerFour = this.questions[this.index].answers[4];
    this.correctness = this.questions[this.index].correct;

  }
  nextQuestion() {
    this.index += 1;
    if (this.index  >=  this.questions.length) {
      alert(`you used all questiuons, your score is ${this.score}`)
    } else {
      this.nextQuest = this.questions[this.index].question;
      this.nextAnswerOne = this.questions[this.index].answers[1];
      this.nextAanswerTwo = this.questions[this.index].answers[2];
      this.nextAnswerThree = this.questions[this.index].answers[3];
      this.nextAnswerFour = this.questions[this.index].answers[4];
      this.correctness = this.questions[this.index].correct;
    }
  }
    /* add an event after clicking as a par-r of the method */
    checkCorrectness() {
      //clicked button event  === this.questions[this.index].correct;
      if ( this.nextAnswerOne === this.questions[this.index].correct) {
        alert('correct')
        score += 1
        //fire the next button action color, make it undisabled
      } else {
        alert('wrong')
        //show the correct answer by color
        //fire an event to make the next button active
      }
    }
}


const questionObject = new Quiz(questionsList, questionsList.question, questionsList.answers, questionsList.correct)










/*   loadQuestions(questionArray) {
    questionArray.forEach(question => {
      const question = new Question(question);
      this.questions.push(question)
    }) 
  } */
/*   randomQuestionIndex(min, max) {
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
      if (this.usedQuestionsIndexes.length === this.question.length) {
          alert('you used all questions!')
      }
  }
  checkCorrectAnswer() {
      if (this.answers.key === this.correctness) {
          alert('this is correct!')
          this.score += 1
          return this.score;
      }
  } 
} */



//check output

/* console.log(questionObject.randomQuestionIndex(0, questionsList.length));
console.log(questionsList[questionObject.randomQuestionIndex(0, questionsList.length)])
console.log(questionsList[questionObject.randomQuestionIndex(0, questionsList.length)].answers)
console.log(questionsList[questionObject.randomQuestionIndex(0, questionsList.length)].answers[1])
console.log(questionsList[questionObject.randomQuestionIndex(0, questionsList.length)].correct)
 */



//class version 2
/* class Quiz {
  constructor(questions, question, answers, answer, correctAnswer) {
    this.questions = questions;
    this.question = question;
    this.answers = answers;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
    this.score = 0;
    this.index = 0;
  }
  provideContentForQuestion(index) {
    let showQuestion = this.questions[index].question;
    let showAnswers = this.questions[index].answers;
    let correctOption = this.questions[index].correctAnswer;
    this.index += 1
  }
  nextQuestion() {
    if (this.index !== this.questions.length) {
      let showNextQuestion = this.questions[index].this.question;
      let showNextAnswers = this.questions[index].this.answer.key;
      let correctNextOption = this.questions[index].this.correctAnswer;
    } else {
      alert("you used all question!")
    }

  }
  checkCorrectness() {
    if (this.questions[index].this.answers.this.answer === this.questions[index].this.correctAnswer) {
      alert('correct')
      this.score += 1
    } else {
      alert("wrong")
    }
  }
}
const questionObject = new Quiz(questionsList, questionsList.question, questionsList.answers, questionsList.answer, questionsList.correct)
console.log(questionObject.provideContentForQuestion(0)) */