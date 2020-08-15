//2nd attempt
class FirstSection {
  constructor() {
    this.parentSection = document.getElementsByClassName("parent-element")[0];
    //generate a content of the 1st page
    //full page with the background
    this.fisrtSection = document.createElement("div");
    this.fisrtSectionBackground = document.createElement("div");
    //create the elements
    this.contentHolder = document.createElement("section");
    this.h2 = document.createElement("h2");
    this.h3 = document.createElement("h3");
    this.inputName = document.createElement("input");
    this.submit = document.createElement("button");
    this.p = document.createElement("p");
    this.startBtn = document.createElement("button");
    this.home = document.getElementById("game-status");
    this.contact = document.getElementById("contact");
  }
  setAttributesElements() {
    //here set all attributes for the created elements
    this.fisrtSection.setAttribute("class", "first-section");
    this.fisrtSection.setAttribute("id", "start-game-again");
    this.fisrtSectionBackground.setAttribute("class", "banner");
    this.contentHolder.setAttribute("class", "hello-section");
    this.h2.innerHTML = "Hello, dear stranger!";
    this.h3.innerHTML = "What is your name?";
    this.inputName.setAttribute("id", "stranger-name");
    this.inputName.setAttribute("placeholder", "Your name");
    this.submit.setAttribute("class", "name-btn");
    this.submit.innerHTML = "That's my name";
    this.p.innerHTML = `Hey ${this.inputName.value}! I have a nice game for you!If you wanna play - click the Start button!`;
    this.startBtn.classList.add("start-btn");
    this.startBtn.innerHTML = "START";
    this.contact.setAttribute("href", "#footer-scroll");
    // this.inputName.setAttribute('id', )
  }
  structureFirstSection() {
    //append all children
    this.parentSection.appendChild(this.fisrtSection);
    this.fisrtSection.appendChild(this.fisrtSectionBackground);
    this.fisrtSection.appendChild(this.contentHolder);
    this.contentHolder.appendChild(this.h2);
    this.contentHolder.appendChild(this.h3);
    this.contentHolder.appendChild(this.inputName);
    this.contentHolder.appendChild(this.submit);
  }
  generateFirstSectionPageContent() {
    //attach atrributes and structure the page
    this.setAttributesElements();
    this.structureFirstSection();
  }
  strangerNameLength() {
    //user must leave input
    return this.inputName.value.length;
  }
  addPAndButton() {
    //greet a user and add start button
    this.contentHolder.appendChild(this.p);
    this.contentHolder.appendChild(this.startBtn);
  }
  greetAfterClick() {
    //greet a user by name input
    this.generateFirstSectionPageContent();
    if (this.strangerNameLength() > 0) {
      this.addPAndButton();
    } else {
      alert("please, put your name");
    }
  }
  cleanFirstSection() {
    //be ready to reuse this page again
    //debug below
   // this.p.innerHTML = "";
   this.p.remove()
    //debug above
    this.startBtn.remove();
    this.inputName.value = "";
    secondSectionObject.score = 0;
    //secondSectionObject.index = 0;

  }
  hideFurstSection() {
    this.fisrtSection.classList.add("hide");
  }
  removeANdHideFirstSection() {
    //prepare for the next game iteration and hide the section
    this.cleanFirstSection();
    this.hideFurstSection();
    console.log("home");
    return this.inputName.value;
  }
}
let firstSectionObj = new FirstSection();

function addEventListenersFirstSection() {
  firstSectionObj.submit.addEventListener(
    "click",
    firstSectionObj.greetAfterClick.bind(firstSectionObj)
  );
  //  firstSectionObj.startBtn.addEventListener('click', )
  firstSectionObj.home.addEventListener(
    "click",
    firstSectionObj.removeANdHideFirstSection.bind(firstSectionObj)
  );
  firstSectionObj.startBtn.addEventListener(
    "click", secondSectionObject.generateAndAddListenetrsTest.bind(secondSectionObject)
    
  );
}

//quiz section
class SecondSection {
  constructor(questions, question, answers, correctness) {
    this.questions = questions;
    this.question = question;
    this.answers = answers;
    this.correctness = correctness;
    this.score = 0;
    this.finalScore = 0;
   // this.usedQuestions = [];
    this.index = 0;
    this.message = "";
    //content of the second section
    this.parentSection = firstSectionObj.parentSection;
    //generate a content of the 2nd page
    //full page with the background
    this.secondSection = document.createElement("div");
    this.secondSectionBackground = document.createElement("div");
    this.questionContainer = document.createElement('div');
    this.scoreWrapper = document.createElement('div');
    this.scoreText = document.createElement('div');
    this.scoreElement = document.createElement('div');
    //elements for the question, answers, button
   
    this.questionHolder = document.createElement('div');
    this.allButtons = document.createElement('div');
    this.allAnswerButton = document.createElement('div')
    this.answerOneHolder = document.createElement('button');
    this.answerTwoHolder = document.createElement('button');
    this.answerThreeHolder = document.createElement('button');
    this.answerFourHolder = document.createElement('button');
    
   // this.btn = [this.answerOneHolder, this.answerTwoHolder, this.answerThreeHolder, this.answerFourHolder];
    this.congrats = document.createElement('div');
    //answer buttons 
    this.answerOneHolder = document.createElement('button');
    this.answerTwoHolder = document.createElement('button');
    this.answerThreeHolder = document.createElement('button');
    this.answerFourHolder = document.createElement('button');
    //next quiz button
    this.nextBtn = document.createElement('button');
    this.nextBtn.disabled = true;
    //add next game opening button
    this.startSecondGameBtn = document.createElement('button');
    //for the text
    this.message = ''

  }
  setAttributesElements() {
    this.secondSection.setAttribute("class", "quiz");
    this.secondSectionBackground.setAttribute("class", "banner-quiz");
    this.questionContainer.setAttribute('id', 'question-container');
    this.scoreText.innerHTML = 'your score is: '
    this.scoreElement.setAttribute('id', 'score')
    this.scoreElement.innerHTML  = this.score; 
    //elements for the question, answers, button
    this.questionHolder.setAttribute('id', 'question');
    this.allButtons.setAttribute('id', 'all-button')
    this.allAnswerButton.setAttribute('id', 'answer-buttons');
    this.congrats.setAttribute('id', 'congratulation');
    //answer buttons
    this.answerOneHolder.setAttribute('class', 'btn-answer');
    this.answerTwoHolder.setAttribute('class', 'btn-answer');
    this.answerThreeHolder.setAttribute('class', 'btn-answer');
    this.answerFourHolder.setAttribute('class', 'btn-answer');
   // this.btn = [...document.getElementsByClassName('btn-answer')];
    //next quiz button
    this.nextBtn.setAttribute('class', 'btn next');
    this.nextBtn.innerHTML = 'NEXT'
        //add a button to open the next game
    this.startSecondGameBtn.setAttribute('href', '#second-game-section');
    this.startSecondGameBtn.setAttribute('id', 'start-second-game');
    this.startSecondGameBtn.innerHTML = "hey, what is next?"
   
  }
  structureSecondSection() {
    //add a new page
    this.parentSection.appendChild(this.secondSection);
    this.secondSection.appendChild(this.secondSectionBackground);
    //add a content to the second section
    this.secondSection.appendChild(this.questionContainer);
    //form the content section on the second page
    //add score wrapper to the question container
    this.questionContainer.appendChild(this.scoreWrapper);
    //add elements to the score wrapper
    this.scoreWrapper.appendChild(this.scoreText);
    this.scoreWrapper.appendChild(this.scoreElement);
    //add all buttons elemnt (which has a question, answers, congrats section and button next (later))
    this.questionContainer.appendChild(this.allButtons)
    this.allButtons.appendChild(this.questionHolder); 
    this.allButtons.appendChild(this.allAnswerButton);
    //add answer buttons separatelly
    this.allAnswerButton.appendChild(this.answerOneHolder)
    this.allAnswerButton.appendChild(this.answerTwoHolder)
    this.allAnswerButton.appendChild(this.answerThreeHolder)
    this.allAnswerButton.appendChild(this.answerFourHolder)
    //congrats (text) section
    this.allButtons.appendChild(this.congrats)
    //next quiz btn
    this.allButtons.appendChild(this.nextBtn);

  }
  generateSecondSectionPageContent() {
    firstSectionObj.removeANdHideFirstSection();
    this.structureSecondSection();
    this.setAttributesElements();
    
    this.provideQuestion();
    this.showQuestionAndAnswers();
    //debug restart show only 1 question
   // this.nextQuestion()

  }
  generateAndAddListenetrsTest() {
    this.generateSecondSectionPageContent();
    const myBtn = [...document.getElementsByClassName('btn-answer')];
    myBtn.forEach(element => {
      element.addEventListener('click', function() {
        if (element.innerHTML === secondSectionObject.correctness) {
       //   alert("correct")
           secondSectionObject.correctAnswer()
          secondSectionObject.scoreElement.innerHTML = secondSectionObject.score;
          secondSectionObject.questionHolder.innerHTML = secondSectionObject.question;
           secondSectionObject.congrats.innerHTML = 'Correct!!!';
          secondSectionObject.nextBtn.disabled = false; 
          
         }
         else {
      //    alert('incorrect')
          //show correct answer
           secondSectionObject.questionHolder.innerHTML = secondSectionObject.question;
          secondSectionObject.congrats.innerHTML = `sorry, but a correct answer is ${secondSectionObject.correctness}`;
          secondSectionObject.nextBtn.disabled = false; 
          
        }
         //work with the next button
       secondSectionObject.answerOneHolder.disabled = true;
       secondSectionObject.answerTwoHolder.disabled = true;
       secondSectionObject.answerThreeHolder.disabled = true;
       secondSectionObject.answerFourHolder.disabled = true;
       secondSectionObject.nextBtn.disabled = false; 
      });
    });
    secondSectionObject.nextBtn.addEventListener('click', function() {
      secondSectionObject.nextQuestion();
      secondSectionObject.provideQuestion();
       secondSectionObject.showQuestionAndAnswers();
    });
    secondSectionObject.startSecondGameBtn.addEventListener('click',  secondSectionObject.generateNewQuizHideItAddThirdSection.bind(secondSectionObject))
   // generateNewQuizStart
    //below is good above is debug
    //secondSectionObject.startSecondGameBtn.addEventListener('click',  thirdSection.generateContentThirdPage.bind(thirdSection))

  }
  provideQuestion() {
    if (this.index === this.questions.length) {
      this.message = `Hey! I don't have any questions for you, your score is ${this.score}`;
      console.log(this.index)
      this.clearQuizContent();
      this.congrats.innerHTML = '';
    } else {
      this.question = this.questions[this.index].question;
      this.answerOne = this.questions[this.index].answers[1];
      this.answerTwo = this.questions[this.index].answers[2];
      this.answerThree = this.questions[this.index].answers[3];
      this.answerFour = this.questions[this.index].answers[4];
      this.correctness = this.questions[this.index].correct;
    }
  //  console.log(element.innerHTML);
   // console.log(secondSectionObject.correctness);
  }
  showQuestionAndAnswers() {
   // this.provideQuestion();
    //show the question
    this.questionHolder.innerHTML = this.question;
    this.congrats.innerHTML = "";
    //show the answer option
    this.answerOneHolder.innerHTML = this.answerOne;
    this.answerTwoHolder.innerHTML = this.answerTwo;
    this.answerThreeHolder.innerHTML = this.answerThree;
    this.answerFourHolder.innerHTML = this.answerFour;
   // this.btn = [this.answerOneHolder, this.answerTwoHolder, this.answerThreeHolder, this.answerFourHolder];
    //make the buttons clickable
    this.answerOneHolder.disabled = false;
    this.answerTwoHolder.disabled = false;
    this.answerThreeHolder.disabled = false;
    this.answerFourHolder.disabled = false;
    this.nextBtn.disabled = true;
   // this.scoreHolder.innerHTML = this.score;
    this.scoreElement.innerHTML  = this.score; 
  }
  correctAnswer() {
    this.score += 1;
    console.log('correct answer score+1')
  }
  nextQuestion() {
    this.index += 1;
    console.log('nextQuestion index+1')
  }
  clearQuizContent() {
  //  this.message = document.createTextNode(`${firstSectionObj.inputName.value}, let\'s check a new adventure! Maybe you can increase your score even more?`)
  
  //    this.congrats.appendChild(this.message)
    
    this.congrats.innerHTML =  `${firstSectionObj.inputName.value}, let\'s check a new adventure! Maybe you can increase your score even more?`;

    console.log(this.congrats.innerHTML)
    console.log(this.congrats)
    this.questionHolder.remove()
    this.nextBtn.remove()
    this.answerOneHolder.remove()
    this.answerTwoHolder.remove()
    this.answerThreeHolder.remove()
    this.answerFourHolder.remove()
    //extra clear of everything
    this.congrats.remove();
    this.allAnswerButton.remove();
    this.allButtons.remove()


    this.finalScore = 10 + this.score;
    this.startSecondGameBtn.innerHTML = "Hey, what is next?";
    
     this.questionContainer.appendChild(this.startSecondGameBtn);
     console.log('clearQuizContent')
   // thirdSection.showNextBtnAfterQuiz()
  }
  hideQuizSection() {
    //this.textMethodClearAndGenerateAgainQuiz()
    this.secondSection.classList.toggle("hide");
    console.log('hideQuizSection')
  }
  generateNewQuizStart() {
/*     if(this.startSecondGameBtn) {
      this.startSecondGameBtn.remove();
    }
    if(this.allAnswerButton) {
      this.allAnswerButton.remove();
    } */
   // this.allAnswerButton.remove();
    this.score = 0
    //this.generateSecondSectionPageContent();
    console.log('generateSecondSectionPageContent')

   // this.generateAndAddListenetrsTest();
   //less elements without question container
   this.questionHolder = document.createElement('div');
   this.allButtons = document.createElement('div');
   this.allAnswerButton = document.createElement('div')
   this.answerOneHolder = document.createElement('button');
   this.answerTwoHolder = document.createElement('button');
   this.answerThreeHolder = document.createElement('button');
   this.answerFourHolder = document.createElement('button');
   
  // this.btn = [this.answerOneHolder, this.answerTwoHolder, this.answerThreeHolder, this.answerFourHolder];
   this.congrats = document.createElement('div');
   //answer buttons 
   this.answerOneHolder = document.createElement('button');
   this.answerTwoHolder = document.createElement('button');
   this.answerThreeHolder = document.createElement('button');
   this.answerFourHolder = document.createElement('button');
   //next quiz button
   this.nextBtn = document.createElement('button');
   this.nextBtn.disabled = true;
   //add next game opening button
  // this.startSecondGameBtn = document.createElement('button');
   //for the text
   this.message = ''

    //set
     //elements for the question, answers, button
     this.questionHolder.setAttribute('id', 'question');
     this.allButtons.setAttribute('id', 'all-button')
     this.allAnswerButton.setAttribute('id', 'answer-buttons');
     this.congrats.setAttribute('id', 'congratulation');
     //answer buttons
     this.answerOneHolder.setAttribute('class', 'btn-answer');
     this.answerTwoHolder.setAttribute('class', 'btn-answer');
     this.answerThreeHolder.setAttribute('class', 'btn-answer');
     this.answerFourHolder.setAttribute('class', 'btn-answer');
    // this.btn = [...document.getElementsByClassName('btn-answer')];
     //next quiz button
     this.nextBtn.setAttribute('class', 'btn next');
     this.nextBtn.innerHTML = 'NEXT'
         //add a button to open the next game
   //  this.startSecondGameBtn.setAttribute('href', '#second-game-section');
    // this.startSecondGameBtn.setAttribute('id', 'start-second-game');
    // this.startSecondGameBtn.innerHTML = "hey, what is next?"

    //structe
    //add all buttons elemnt (which has a question, answers, congrats section and button next (later))
    this.questionContainer.appendChild(this.allButtons)
    this.allButtons.appendChild(this.questionHolder); 
    this.allButtons.appendChild(this.allAnswerButton);
    //add answer buttons separatelly
    this.allAnswerButton.appendChild(this.answerOneHolder)
    this.allAnswerButton.appendChild(this.answerTwoHolder)
    this.allAnswerButton.appendChild(this.answerThreeHolder)
    this.allAnswerButton.appendChild(this.answerFourHolder)
    //congrats (text) section
    this.allButtons.appendChild(this.congrats)
    //next quiz btn
    this.allButtons.appendChild(this.nextBtn);
    this.startSecondGameBtn.remove()

   //debug above
   this.index = 0;
    this.provideQuestion();
    this.showQuestionAndAnswers();
    console.log('generateNewQuizStart')

  }
  textMethodClearAndGenerateAgainQuiz() {
    //secondSectionObject.clearQuizContent();
   
   // secondSectionObject.startSecondGameBtn.remove()
    secondSectionObject.generateNewQuizStart();
    this.generateAndAddListenetrsTest()
    console.log('textMethodClearAndGenerateAgainQuiz')
  }
  generateNewQuizHideItAddThirdSection() {
   
    thirdSection.generateContentThirdPage()
    this.textMethodClearAndGenerateAgainQuiz()
    this.hideQuizSection()
    thirdSection.generateAndAddListenersThirdPage()
    console.log('generateNewQuizHideItAddThirdSection')
  }
}

let secondSectionObject = new SecondSection(questionsList, questionsList.question, questionsList.answers, questionsList.correct);

class ThirdSection {
  constructor() {
    //create the elements
   // fix it to hide the 2nd section
    this.parentSection = firstSectionObj.parentSection;
    //generate new elements
    this.thirdSection = document.createElement('div')
    this.thirdSectionBanner = document.createElement('div')
    this.catchBtn = document.createElement('button')
    this.thirdSectionContent = document.createElement('div')
    this.info = document.createElement('div')
    this.infoP = document.createElement('p')
    this.thirdSectionScore = document.createElement('div')
    //text and score
    this.thirdScore = document.createElement('div')
  }
  structureThirdSection() {
    this.parentSection.appendChild(this.thirdSection)
    this.thirdSection.appendChild(this.thirdSectionBanner)
    this.thirdSectionBanner.appendChild(this.catchBtn)
    this.thirdSection.appendChild(this.thirdSectionContent)
    this.thirdSectionContent.appendChild(this.info)
    this.info.appendChild(this.infoP)
    //text and score
    this.thirdSectionContent.appendChild(this.thirdScore)
  }
  setAttributesElements() {
    this.thirdSection.setAttribute('id', 'second-game-section')
    this.thirdSection.setAttribute('class', 'second-game')
    this.thirdSectionBanner.setAttribute('class', 'banner-second-game')
    this.catchBtn.setAttribute('class', 'catch')
    this.catchBtn.innerHTML = "CATCH ME!"
    this.infoP.innerHTML = 'So... Next challenge is - try to catch the button!'
    //score
    this.thirdSectionContent.setAttribute('id', 'second-game-content')
   
  //  this.info.setAttribute('')
   // this.infoP.setAttribute('', '')
   // this.thirdSectionScore.setAttribute('', '')

   //text and score
   this.thirdScore.setAttribute('class', 'score-wrapper-second-game')
  }
  generateContentThirdPage() {
     // secondSectionObject.hideQuizSection();
    this.structureThirdSection();
    this.setAttributesElements();
    //debug
   // secondSectionObject.generateNewQuizStart()
    console.log('generateContentThirdPage')
  }
  gameHolders() {
    this.thirdSection.classList.toggle('hide')
    this.thirdScore.innerHTML = ''
  //  secondSectionObject.hideQuizSection();
  }
  generateAndAddListenersThirdPage() {
    this.generateContentThirdPage();
    thirdSectionListeners()
    addListenerCatchBtn()
    console.log('generateAndAddListenersThirdPage')
  }
  resetThirdPage() {
    
/*     if(this.catchBtn.innerHTML = 'Let\'s check the results!') {
      this.catchBtn.innerHTML = 'CATCH ME!';
    }
    this.thirdScore.className = 'catch' */
    
    //debug below
  //  this.info.innerHTML = 'So... Next challenge is - try to catch the button!'
    //this.thirdScore.innerHTML = ''
    //addListenerCatchBtn()
    this.infoP.remove()
    this.info.remove()
    this.thirdScore.remove()
    this.catchBtn.remove()
    //debug above
    
  }
  hideThirdPage(){
    this.thirdSection.classList.toggle('hide')
  }
  resetHideShowLastPage() {
    this.resetThirdPage();
    this.hideThirdPage();
    finalSectionObj.generateContent() 
  }
}

let thirdSection = new ThirdSection();
function addListenerCatchBtn() {
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
                secondSectionObject.score += 10
                thirdSection.thirdScore.innerHTML = `YOUR SCORE IS: ${secondSectionObject.finalScore}`
                thirdSection.catchBtn.classList.toggle('third')
                thirdSection.catchBtn.innerHTML = 'Let\'s check the results!'
                thirdSection.catchBtn.addEventListener('click', function() {
                  thirdSection.resetHideShowLastPage()
                //  thirdSection.resetThirdPage()
  /*                 finalSectionObj.finalSection.classList.toggle('hide')
                  thirdSection.classList.toggle('hide')
                  firstSectionObj.home.innerHTML = 'Start game again';
                        //trackHomeButton();
                        fourthSectionObj.generateContent()   */          
          }) 
        })
      })
    })
  })
}


function thirdSectionListeners() {
  secondSectionObject.startSecondGameBtn.addEventListener('click', thirdSection.gameHolders.bind(thirdSection))
}


class FinalSection {
  constructor() {
    //parent
    this.parentSection = firstSectionObj.parentSection;
    //use finalSection 
    this.finalSection = document.createElement('section')
    this.layeredImage = document.createElement('div')
    this.lastBanner = document.createElement('div')
    this.lastText = document.createElement('div')
    this.animatedImage = document.createElement('img')
  }
  structureLastSection() {
    this.parentSection.appendChild(this.finalSection)
    this.finalSection.appendChild(this.layeredImage)
    this.layeredImage.appendChild(this.lastBanner)
    this.layeredImage.appendChild(this.lastText)
    this.layeredImage.appendChild(this.animatedImage)

  }
  setAttribute() {
    this.finalSection.setAttribute('class', 'animation')
    this.layeredImage.setAttribute('class', 'layered-image')
    this.lastBanner.setAttribute('class', 'banner-finish-game')
    this.lastText.setAttribute('id', 'congrats-text')
    this.lastText.setAttribute('class','animation-text')
    this.lastText.innerHTML = `Yey ${firstSectionObj.inputName.value}! Your score is ${secondSectionObject.finalScore}. Congratulations and thank you very much for you time!`
    this.animatedImage.setAttribute('src', 'images/sun2.png')
  }
  generateContent() {
    this.setAttribute()
    this.structureLastSection()
   // firstSectionObj.home.addEventListener('click', )
   firstSectionObj.home.innerHTML = 'Start game again'
   homeRestartGameBtn()
  }
}

let finalSectionObj = new FinalSection();

function homeRestartGameBtn() {
  firstSectionObj.home.addEventListener('click', function() {
    if (thirdSection.thirdSection.classList.contains('hide')){
      finalSectionObj.finalSection.classList.toggle('hide')
       firstSectionObj.fisrtSection.classList.toggle("hide");
      firstSectionObj.generateFirstSectionPageContent()  
      firstSectionObj.home.innerHTML = 'You are in game'
/*       secondSectionObject.
      thirdSection. */
    }
  })
}

function startCode() {
  firstSectionObj.generateFirstSectionPageContent();
  addEventListenersFirstSection();
 
}

startCode();


//add it to the 2rd section (to oprn if from quiz)
//#second-game-section (section)