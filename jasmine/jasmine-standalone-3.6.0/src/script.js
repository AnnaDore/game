//hello-section
//greeting on the 1st screen
//track the input
let greetingButton = document.getElementsByClassName('name-btn')[0]
let inputName = document.getElementById('stranger-name');
let parentGreetingElement = document.getElementsByClassName('hello-section')[0]
//choose between the button and the link
let startBtn = document.createElement('button')
let startLink = document.createElement('a')
//to hide the 1st section
let firstSection = document.getElementsByClassName('first-section')[0]
//nav elements
let contact = document.getElementById('contact')



//check that a user put the name
function strangerNameLength() {
   return inputName.value.length;
} 
//what to show if the name was added
function addPAndStartButton() {
  let p = document.createElement('p')
  //try to se several lines
  let textMultiLines = `Hey ${inputName.value}!` + 
  ' have a nice game for you!' + 
  'If you wanna play - click the Start button!';
    p.appendChild(document.createTextNode(textMultiLines))
 // p.appendChild(document.createTextNode(`Hey ${inputName.value}! I have a nice game for you! If you wanna play - click the Start button!`))
  parentGreetingElement.appendChild(p)
  //button or link
  //button
 parentGreetingElement.appendChild(startBtn)
  startBtn.classList.add('start-btn')
  startBtn.setAttribute('href', '#quiz-scroll')
  //changes below
  let spanButtonStart = document.createElement('span')
  startBtn.appendChild(spanButtonStart)
    //changes above


    startBtn.innerHTML = 'start'  
  //link
/*   parentGreetingElement.appendChild(startLink)
  startLink.classList.add('start-btn')
  startLink.setAttribute('href', '#quiz-scroll')
  startLink.innerHTML = 'LET\'S GO!!'  */
  //uncomment if you use button
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
//link or button
//button
startBtn.addEventListener('click', function() {
  addQuizSection();
})  
//link
/* startLink.addEventListener('click', function() {
  addQuizSection();
})  */

//hide 1st section
function hideFirstSection() {
  firstSection.classList.toggle('hide')
}
function scrollToFooter() {
  contact.setAttribute('href', '#footer-scroll')
}
contact.addEventListener('click', scrollToFooter)

//working with the new elements in the quiz page
let bannerSectionQuiz = document.createElement('div')
let bannerParent = document.getElementsByClassName('parent-section')[0]
let bodyParent = document.querySelector('body')

//after click of the start button -  generate the 1st section of the game
function addQuizSection() {
  quizHolers();
  hideFirstSection();

}

//generate the questions and answers holders and banner
let quizSection = document.getElementsByClassName('quiz')[0]

function quizHolers() {
  quizSection.classList.toggle('hide')
  showData()
}


class Quiz {
  constructor(questions,question, answers, correctness) {
      this.questions = questions;
      this.question = question;
      this.answers = answers;
      this.correctness = correctness;
      this.score = 0;
      this.usedQuestions = [];
      this.index = 0;
      this.message = '';
  }
  provideQuestion() {
    if (this.index  ===  this.questions.length) {
     this.message = `Hey! I don't have any questions for you, your score is ${this.score}`
     clearQuizPart()

    } else {
      this.question = this.questions[this.index].question;
      this.answerOne = this.questions[this.index].answers[1];
      this.answerTwo = this.questions[this.index].answers[2];
      this.answerThree = this.questions[this.index].answers[3];
      this.answerFour = this.questions[this.index].answers[4];
      this.correctness = this.questions[this.index].correct;
    }
    
  }
  nextQuestion() {
    this.index += 1;
    this.provideQuestion();
  }
    /* add an event after clicking as a par-r of the method */
    correctAnswer() {
      this.score += 1;
      switch (this.score) {
        case 1: 
        this.message = `Correct! you increased your score, now it is ${this.score}`
        break;
        case 2:
          this.message = `Correct answer again, ${inputName.value}! What is next?`
          break;
        case 3:
          this.message = `Yey, ${inputName.value}, correct!`
          break;
          case 3:
            this.message = `${inputName.value} you got maximum points!`
            break;
      }
    }
}

const questionObject = new Quiz(questionsList, questionsList.question, questionsList.answers, questionsList.correct)

//add listeners for the question and answers and next button
let questionHolder = document.getElementById('question')
//let allAnswerButtons = [...document.getElementsByClassName('btn-answer')];
let answerOneHolder = document.getElementsByClassName('answer-one')[0]
let answerOTwoHolder = document.getElementsByClassName('answer-two')[0]
let answerThreeHolder = document.getElementsByClassName('answer-three')[0]
let answerFourHolder = document.getElementsByClassName('answer-four')[0]
let nextBtn = document.getElementsByClassName('next')[0]
let btn = [...document.getElementsByClassName('btn-answer')]
let scoreHolder = document.getElementById('score')
let congrats = document.getElementById('congratulation');
let parentOfQuizSection = document.getElementById('all-buttons')
let parentOFAnswerButtons = document.getElementById('answer-buttons')
//the next button to load the new section




//add content to the quiz section on the webpage
function showData() {
  questionObject.provideQuestion()
  //show the question
  questionHolder.innerHTML = questionObject.question
  congrats.innerHTML = ''
  //show the answer option
  answerOneHolder.innerHTML = questionObject.answerOne;
  answerOTwoHolder.innerHTML = questionObject.answerTwo;
  answerThreeHolder.innerHTML = questionObject.answerThree;
  answerFourHolder.innerHTML = questionObject.answerFour;
  //make the buttons clickable
  answerOneHolder.disabled = false;
  answerOTwoHolder.disabled = false;
  answerThreeHolder.disabled = false;
  answerFourHolder.disabled = false;
  nextBtn.disabled = true;
  scoreHolder.innerHTML = questionObject.score

}

btn.forEach(element => {
  element.addEventListener('click', function() {
    if (element.innerHTML === questionObject.correctness) {
     // alert("correct")
      questionObject.correctAnswer()
      scoreHolder.innerHTML = questionObject.score
      questionHolder.innerHTML = questionObject.question
      congrats.innerHTML = questionObject.message;
      nextBtn.disabled = false
    } else {
     // alert('incorrect')
      //show correct answer
      questionHolder.innerHTML = questionObject.question
      congrats.innerHTML = `sorry, but a correct answer is ${questionObject.correctness}`
      nextBtn.disabled = false
      
    }
    //work with the next button
    answerOneHolder.disabled = true;
    answerOTwoHolder.disabled = true;
    answerThreeHolder.disabled = true;
    answerFourHolder.disabled = true;
    nextBtn.disabled = false
     /* nextBtn.classList.toggle('active') */
  })
})

function hideQuizSection() {
  quizSection.classList.toggle('hide')
}

nextBtn.addEventListener('click', function() {
 /*  questionObject.correctAnswer(); */
  questionObject.nextQuestion();
  //questionObject.provideQuestion();
  questionObject.message = ''
  showData();

})

function clearQuizPart() {
  parentOfQuizSection.removeChild(questionHolder);
  btn.forEach(item => {
    parentOFAnswerButtons.removeChild(item);
  })
  parentOfQuizSection.removeChild(nextBtn);
  questionObject.message = `${inputName.value}, let\'s check a new adventure! Maybe you can increase your score even more?`
  congrats.innerHTML = questionObject.message;
  showNextBtnAfterQuiz()

}
//link or button
//button
let startSecondGame = document.createElement('button')
//link
//let startSecondGame = document.createElement('a')

let parentSecondGame  = document.getElementById('question-container')

function showNextBtnAfterQuiz() {
  
  startSecondGame.innerHTML = 'Hey, what is next?'
  startSecondGame.setAttribute('href', '#second-game-section')
  startSecondGame.setAttribute('id', 'start-second-game')
  parentSecondGame.appendChild(startSecondGame)
}

//second game
let gameSection = document.getElementsByClassName('second-game')[0]

//after click of the start button -  generate the 1st section of the game
startSecondGame.addEventListener('click', gameHolders)
//content
let secondScore = document.getElementsByClassName('score-wrapper-second-game')[0]
let catchBtn = document.getElementsByClassName('catch')[0]
let info = document.getElementsByClassName('info')[0]
let animationSection = document.getElementsByClassName('animation')[0]


function gameHolders() {
  gameSection.classList.toggle('hide')
  secondScore.innerHTML = ''
  hideQuizSection();

}




/* gameSection.classList.contains('hide')  &&
 quizSection.classList.contains('hide') && 
 firstSection.classList.contains('hide') */

function trackHomeButton() {
  if (congratsContent.classList.contains('animation-text')) {
   // homeButton.innerHTML = 'Start game again';
  //  homeButton.setAttribute('href', '#start-game-again');

     homeButton.addEventListener('click', function() {
      firstSection.classList.toggle('hide')
      lastPart.classList.toggle('hide')


      }) 
    }
  }



catchBtn.addEventListener('click', function() {
  catchBtn.classList.add('first')
  catchBtn.addEventListener('click', function() {
    catchBtn.classList.remove('first')
    catchBtn.classList.add('second')
    catchBtn.addEventListener('click', function() {
      catchBtn.classList.remove('second')
      catchBtn.classList.add('third')
      catchBtn.addEventListener('click', function() {
        info.innerHTML = "It was a small joke 😀 Here are 10 points for you!"
        questionObject.score += 10
        secondScore.innerHTML = `YOUR SCORE IS: ${questionObject.score}`
        catchBtn.classList.toggle('third')
        catchBtn.innerHTML = 'Let\'s check the results!'
        catchBtn.addEventListener('click', function() {
          animationSection.classList.toggle('hide')
          gameSection.classList.toggle('hide')
          trackHomeButton();
                //new


          return questionObject.score
        })
      })
    })
  })
})

let lastPart = document.getElementsByClassName('animation')[0]
let congratsContent = document.createElement('div')
congratsContent.setAttribute('class', 'animation-text')
congratsContent.innerHTML = `Yey ${inputName.value}! Congratulations and thank you very much for you time!`
lastPart.appendChild(congratsContent)
//home button
let homeButton = document.getElementById('game-status')





   /*      //quizSection.classList.toggle('hide')
        addQuizSection()
        questionObject.score === 0
        questionObject.provideQuestion();
        showData() */

      //  homeButton.setAttribute('href', '#start-game-again');