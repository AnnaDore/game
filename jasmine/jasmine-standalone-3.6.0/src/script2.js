//2nd attempt
//list
class FirstSectionElements {
  constructor() {
    this.greetingButton = document.getElementsByClassName("name-btn")[0];
    this.inputName = document.getElementById("stranger-name");
    this.parentGreetingElement = document.getElementsByClassName(
      "hello-section"
    )[0];
    //choose between the button and the link
    this.startBtn = document.createElement("button");
    this.startLink = document.createElement("a");
    //to hide the 1st section
    this.firstSection = document.getElementsByClassName("first-section")[0];
    //nav elements
    this.contact = document.getElementById("contact");
    this.p = document.createElement("p");
    this.spanButtonStart = document.createElement("span");
  }
}
const firstPageElements = new FirstSectionElements();
//check that a user put the name
function strangerNameLength() {
  return firstPageElements.inputName.value.length;
}
//what to show if the name was added
function addPAndStartButton() {
  let textMultiLines = `Hey ${firstPageElements.inputName.value}! I have a nice game for you!If you wanna play - click the Start button!`;
  firstPageElements.p.appendChild(document.createTextNode(textMultiLines));
  firstPageElements.parentGreetingElement.appendChild(firstPageElements.p);
  firstPageElements.parentGreetingElement.appendChild(
    firstPageElements.startBtn
  );
  firstPageElements.startBtn.classList.add("start-btn");
  firstPageElements.startBtn.setAttribute("href", "#quiz-scroll");
  firstPageElements.startBtn.appendChild(firstPageElements.spanButtonStart);
  firstPageElements.startBtn.innerHTML = "start";
  return firstPageElements.startBtn;
}
//if a user submitted the input by Enter
function greetAfterKeypress(event) {
  if (strangerNameLength() > 0 && event.keyCode === 13) {
    addPAndStartButton();
  } else if (event.keyCode === 13) {
    alert("please, put your name");
  }
}
//if a user submitted the unput by clicking the button
function greetAfterClick() {
  if (strangerNameLength() > 0) {
    addPAndStartButton();
  } else {
    alert("please, put your name");
  }
}
//hide 1st section
function hideFirstSection() {
    firstPageElements.firstSection.classList.toggle("hide");
}
function scrollToFooter() {
  contact.setAttribute("href", "#footer-scroll");
}
/* function trackHomeButton() {
    if (congratsContent.classList.contains('animation-text')) {
     // homeButton.innerHTML = 'Start game again';
    //  homeButton.setAttribute('href', '#start-game-again');
  
       homeButton.addEventListener('click', function() {
        firstSection.classList.toggle('hide')
        lastPart.classList.toggle('hide')
  
  
        }) 
      }
    } */
  
//add listeners to greet a user
function addListenersFirstSection() {
  firstPageElements.inputName.addEventListener("keypress", greetAfterKeypress);
  firstPageElements.greetingButton.addEventListener("click", greetAfterClick);
  firstPageElements.startBtn.addEventListener(
    "click",
    questionObject.addQuizSection.bind(questionObject)
  );
  contact.addEventListener("click", scrollToFooter);
}



class Quiz {
  constructor(questions, question, answers, correctness) {
    this.questions = questions;
    this.question = question;
    this.answers = answers;
    this.correctness = correctness;
    this.score = 0;
    this.finalScore = 0;
    this.usedQuestions = [];
    this.index = 0;
    this.message = "";
    //add quiz elements
    this.bannerSectionQuiz = document.createElement("div");
    this.bannerParent = document.getElementsByClassName("parent-section")[0];
    this.bodyParent = document.querySelector("body");
    this.quizSection = document.getElementsByClassName("quiz")[0];
    //add listeners for the question and answers and next button
    this.questionHolder = document.getElementById("question");
    //let allAnswerButtons = [...document.getElementsByClassName('btn-answer')];
    this.answerOneHolder = document.getElementsByClassName("answer-one")[0];
    this.answerOTwoHolder = document.getElementsByClassName("answer-two")[0];
    this.answerThreeHolder = document.getElementsByClassName("answer-three")[0];
    this.answerFourHolder = document.getElementsByClassName("answer-four")[0];
    this.nextBtn = document.getElementsByClassName("next")[0];
    this.btn = [...document.getElementsByClassName("btn-answer")];
    this.scoreHolder = document.getElementById("score");
    this.congrats = document.getElementById("congratulation");
    this.parentOfQuizSection = document.getElementById("all-buttons");
    this.parentOFAnswerButtons = document.getElementById("answer-buttons");
    this.startSecondGame = document.createElement("button");
    this.parentSecondGame = document.getElementById("question-container");
  }

  quizHolers() {
    console.log("quizHolers");
    this.quizSection.classList.toggle("hide");
    this.showData();
  }
  addQuizSection() {
    console.log("addQuizSection");
    //refer not to this!!!!!! how to fix it?
    this.quizHolers();
    hideFirstSection();
  }
  provideQuestion() {
    if (this.index === this.questions.length) {
      this.message = `Hey! I don't have any questions for you, your score is ${this.score}`;
      this.clearQuizPart();
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
        this.message = `Correct! you increased your score, now it is ${this.score}`;
        break;
      case 2:
        this.message = `Correct answer again, ${firstPageElements.inputName.value}! What is next?`;
        break;
      case 3:
        this.message = `Yey, ${firstPageElements.inputName.value}, correct!`;
        break;
      case 3:
        this.message = `${firstPageElements.inputName.value} you got maximum points!`;
        break;
    }
  }
  showData() {
    this.provideQuestion();
    //show the question
    this.questionHolder.innerHTML = this.question;
    this.congrats.innerHTML = "";
    //show the answer option
    this.answerOneHolder.innerHTML = this.answerOne;
    this.answerOTwoHolder.innerHTML = this.answerTwo;
    this.answerThreeHolder.innerHTML = this.answerThree;
    this.answerFourHolder.innerHTML = this.answerFour;
    //make the buttons clickable
    this.answerOneHolder.disabled = false;
    this.answerOTwoHolder.disabled = false;
    this.answerThreeHolder.disabled = false;
    this.answerFourHolder.disabled = false;
    this.nextBtn.disabled = true;
    this.scoreHolder.innerHTML = this.score;
  }
  clearQuizPart() {
    this.parentOfQuizSection.removeChild(this.questionHolder);
    this.btn.forEach(item => {
      this.parentOFAnswerButtons.removeChild(item);
    })
    this.parentOfQuizSection.removeChild(this.nextBtn);
    this.message = `${firstPageElements.inputName.value}, let\'s check a new adventure! Maybe you can increase your score even more?`
    this.congrats.innerHTML = this.message;
    thirdSection.showNextBtnAfterQuiz()
    this.finalScore = 10 + this.score;
  
  }
  hideQuizSection() {
    this.quizSection.classList.toggle('hide')
  }
}

const questionObject = new Quiz(
  questionsList,
  questionsList.question,
  questionsList.answers,
  questionsList.correct
);

function addListenersSecondSection() {
    questionObject.btn.forEach(element => {
        element.addEventListener('click', function() {
          if (element.innerHTML === questionObject.correctness) {
           // alert("correct")
            questionObject.correctAnswer()
            questionObject.scoreHolder.innerHTML = questionObject.score
            questionObject.questionHolder.innerHTML = questionObject.question
            questionObject.congrats.innerHTML = questionObject.message;
            questionObject.nextBtn.disabled = false
          } else {
           // alert('incorrect')
            //show correct answer
            questionObject.questionHolder.innerHTML = questionObject.question
            questionObject.congrats.innerHTML = `sorry, but a correct answer is ${questionObject.correctness}`
            questionObject.nextBtn.disabled = false
            
          }
          //work with the next button
          questionObject.answerOneHolder.disabled = true;
          questionObject.answerOTwoHolder.disabled = true;
          questionObject.answerThreeHolder.disabled = true;
          questionObject.answerFourHolder.disabled = true;
          questionObject.nextBtn.disabled = false
           /* nextBtn.classList.toggle('active') */
        })
      })
      questionObject.nextBtn.addEventListener('click', function() {
        /*  questionObject.correctAnswer(); */
         questionObject.nextQuestion();
         //questionObject.provideQuestion();
         questionObject.message = ''
         questionObject.showData();
       
       })
}

//3rd section
class ThirdSection {
    constructor() {
        this.startSecondGame = document.createElement('button')
        this.parentSecondGame  = document.getElementById('question-container')
        this.gameSection = document.getElementsByClassName('second-game')[0]
        this.secondScore = document.getElementsByClassName('score-wrapper-second-game')[0]
        this.catchBtn = document.getElementsByClassName('catch')[0]
        this.info = document.getElementsByClassName('info')[0]
        this.animationSection = document.getElementsByClassName('animation')[0]

    }
    showNextBtnAfterQuiz() {
        this.startSecondGame.innerHTML = 'Hey, what is next?'
        this.startSecondGame.setAttribute('href', '#second-game-section')
        this.startSecondGame.setAttribute('id', 'start-second-game')
        this.parentSecondGame.appendChild(this.startSecondGame)
      }
    gameHolders() {
        this.gameSection.classList.toggle('hide')
        this.secondScore.innerHTML = ''
        questionObject.hideQuizSection();
        console.log(questionObject.score)
      }
}
let thirdSection = new ThirdSection();


thirdSection.catchBtn.addEventListener('click', function() {
    thirdSection.catchBtn.classList.add('first')
    thirdSection.catchBtn.addEventListener('click', function() {
        thirdSection.catchBtn.classList.remove('first')
        thirdSection.catchBtn.classList.add('second')
        thirdSection.catchBtn.addEventListener('click', function() {
            thirdSection.catchBtn.classList.remove('second')
            thirdSection.catchBtn.classList.add('third')
            thirdSection.catchBtn.addEventListener('click', function() {
                thirdSection.info.innerHTML = "It was a small joke 😀 Here are 10 points for you!"
                questionObject.score += 10
                console.log(questionObject.score)
                thirdSection.secondScore.innerHTML = `YOUR SCORE IS: ${questionObject.score}`
                thirdSection.catchBtn.classList.toggle('third')
                thirdSection.catchBtn.innerHTML = 'Let\'s check the results!'
                thirdSection.catchBtn.addEventListener('click', function() {
                    thirdSection.animationSection.classList.toggle('hide')
                    thirdSection.gameSection.classList.toggle('hide')
                        //trackHomeButton();
                        fourthSectionObj.generateContent()            
          })
        })
      })
    })
  })

  

function thirdSectionListeners() {
    thirdSection.startSecondGame.addEventListener('click', thirdSection.gameHolders.bind(thirdSection))
}



//4th section
class FourthSection {
    constructor() {
        this.lastPart = document.getElementsByClassName('animation')[0]
        this.congratsContent = document.getElementById('congrats-content')
       
        //home button
        //this.homeButton = document.getElementById('game-status')
    }
    generateContent() {
       this.congratsContent.setAttribute('class', 'animation-text')
       this.congratsContent.innerHTML = `Yey ${firstPageElements.inputName.value}! Your score is ${questionObject.finalScore}. Congratulations and thank you very much for you time!`
       console.log(questionObject.score)
        // this.lastPart.appendChild(this.congratsContent)
    }
}

let fourthSectionObj = new FourthSection();

addListenersFirstSection();
addListenersSecondSection();
thirdSectionListeners();
fourthSectionObj.generateContent()







/*  //greeting section
class FirstSection {
  constructor() {
    this.greetingButton = document.getElementsByClassName("name-btn")[0];
    this.inputName = document.getElementById("stranger-name");
    this.parentGreetingElement = document.getElementsByClassName(
      "hello-section"
    )[0];
    //choose between the button and the link
    this.startBtn = document.createElement("button");
    this.startLink = document.createElement("a");
    //to hide the 1st section
    this.firstSection = document.getElementsByClassName("first-section")[0];
    //nav elements
    this.contact = document.getElementById("contact");
  }
  strangerNameLength() {
      console.log(this.inputName.value.length)
      console.log(this.inputName.length)
    return this.inputName.value.length;
  }
  //what to show if the name was added
  addPAndStartButton() {
    this.p = document.createElement("p");
    //try to se several lines
    this.textMultiLines = `Hey ${this.inputName.value}! have a nice game for you! If you wanna play - click the Start button!`;
    this.spanButtonStart = document.createElement("span");

    this.p.appendChild(document.createTextNode(this.textMultiLines));
    this.parentGreetingElement.appendChild(this.p);
    this.parentGreetingElement.appendChild(this.startBtn);
    this.startBtn.classList.add("start-btn");
    this.startBtn.setAttribute("href", "#quiz-scroll");
    this.startBtn.appendChild(this.spanButtonStart);
    this.startBtn.innerHTML = "start";
    return this.startBtn;
  }
  debugMethod() {
    console.log("debug");
  //  this.addPAndStartButton();
  }
  //if a user submitted the input by Enter
  greetAfterKeypress(event) {
    if (this.strangerNameLength() > 0 && event.keyCode === 13) {
      this.addPAndStartButton();
    } else if (event.keyCode === 13) {
      alert("please, put your name");
      this.addPAndStartButton();
    }
  }
  //if a user submitted the unput by clicking the button
  greetAfterClick() {
    this.strangerNameLength();
    if (this.strangerNameLength() > 0) {
      this.addPAndStartButton();
      // let letgoButton = document.getElementsByClassName('start-btn')[0]
    } else {
      alert("please, put your name");
      this.addPAndStartButton();
    } 
  }

}

const firstSectionObject = new FirstSection();

//firstSectionObject.addPAndStartButton()
function addListeners() {
    //firstSectionObject.debugMethod();

    firstSectionObject.inputName.addEventListener(
      "keypress",
      firstSectionObject.greetAfterKeypress
    );
    firstSectionObject.greetingButton.addEventListener(
      "click",
      firstSectionObject.greetAfterClick
    );
    firstSectionObject.startBtn.addEventListener("click", function () {
      addQuizSection();
    });
  
}
addListeners() 
  */

/* //test attempt
class Test {
  constructor() {
    this.greetingButton = document.getElementsByClassName("name-btn")[0];
    this.inputName = document.getElementById("stranger-name");
    this.parentGreetingElement = document.getElementsByClassName(
      "hello-section"
    )[0];
    //choose between the button and the link
    this.startBtn = document.createElement("button");
    this.startLink = document.createElement("a");
    //to hide the 1st section
    this.firstSection = document.getElementsByClassName("first-section")[0];
    //nav elements
    this.contact = document.getElementById("contact");
  }
  methodOne() {
      console.log(this.contact)
  }
  methodTwo() {
      if(true) {
        this.methodOne()
      }

  }
}
const testObj = new Test();
testObj.methodTwo();
testObj.methodOne(); */
