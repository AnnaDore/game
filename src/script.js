//nav bar which I use to create a new page
parentSection = document.getElementsByClassName("parent-element")[0];

class FirstSection {
  constructor() {
  }
  createFirstPageElements() {
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
    this.home.innerHTML = "You are in game";
    this.contact.setAttribute("href", "#footer-scroll");
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
  }
  structureFirstSection() {
    //append all children
    parentSection.appendChild(this.fisrtSection);
    this.fisrtSection.appendChild(this.fisrtSectionBackground);
    this.fisrtSection.appendChild(this.contentHolder);
    this.contentHolder.appendChild(this.h2);
    this.contentHolder.appendChild(this.h3);
    this.contentHolder.appendChild(this.inputName);
    this.contentHolder.appendChild(this.submit);
  }
  generateFirstSectionPageContent() {
    //attach atrributes and structure the page
    this.createFirstPageElements();
    this.setAttributesElements();
    this.structureFirstSection();
    addEventListenersFirstSection();
  }
  strangerNameLength() {
    //user must leave input
    return this.inputName.value.length;
  }
  addPAndButton() {
    //greet a user and add start button
    this.startBtn.classList.add("start-btn");
    this.startBtn.innerHTML = "START";
    this.p.innerHTML = `Hey ${this.inputName.value}! I have a nice game for you!If you wanna play - click the Start button!`;
    this.contentHolder.appendChild(this.p);
    this.contentHolder.appendChild(this.startBtn);
  }
  greetAfterClick() {
    //greet a user by name input
    if (this.strangerNameLength() > 0) {
      this.addPAndButton();
    } else {
      alert("please, put your name");
    }
  }
  removeFirstSectionCreateSecondSection() {
    parentSection.removeChild(parentSection.lastChild);
  }
}

let firstSectionObj = new FirstSection();

//greet a user + generate second section
function addEventListenersFirstSection() {
  firstSectionObj.submit.addEventListener(
    "click",
    firstSectionObj.greetAfterClick.bind(firstSectionObj)
  );
  firstSectionObj.startBtn.addEventListener(
    "click",
    secondSectionObject.generateSecondSectionContentAndAddListeners.bind(secondSectionObject)
  );
}

class SecondSection {
  constructor(questions, question, answers, correctness, image) {
    this.questions = questions;
    this.question = question;
    this.answers = answers;
    this.correctness = correctness;
    this.image = image;
    this.score = 0;
    this.finalScore = 0;
    this.index = 0;
    
  }
  createSecondPageElements() {
    //generate a content of the 2nd page
    //full page with the background
    this.secondSection = document.createElement("div");
    this.secondSectionBackground = document.createElement("div");
    this.questionContainer = document.createElement("div");
    this.scoreWrapper = document.createElement("div");
    this.scoreText = document.createElement("div");
    this.scoreElement = document.createElement("div");
    //elements for the question, answers, button
    this.questionHolder = document.createElement("div");
    this.allButtons = document.createElement("div");
    this.allAnswerButton = document.createElement("div");
    this.answerOneHolder = document.createElement("button");
    this.answerTwoHolder = document.createElement("button");
    this.answerThreeHolder = document.createElement("button");
    this.answerFourHolder = document.createElement("button");
    this.congrats = document.createElement("div");
    //answer buttons
    this.answerOneHolder = document.createElement("button");
    this.answerTwoHolder = document.createElement("button");
    this.answerThreeHolder = document.createElement("button");
    this.answerFourHolder = document.createElement("button");
    //next quiz button
    this.nextBtn = document.createElement("button");
    this.nextBtn.disabled = true;
    //add next game opening button
    this.startSecondGameBtn = document.createElement("button");
    //add image in quiz
    this.imageWrapper = document.createElement('div')
    this.imageHolder = document.createElement('img')
    
  }
  setAttributesElements() {
    this.secondSection.setAttribute("class", "quiz");
    this.secondSectionBackground.setAttribute("class", "banner-quiz");
    this.questionContainer.setAttribute("id", "question-container");
    this.scoreText.innerHTML = "your score is: ";
    this.scoreElement.setAttribute("id", "score");
    this.scoreElement.innerHTML = this.score;
    //elements for the question, answers, button
    this.questionHolder.setAttribute("id", "question");
    this.allButtons.setAttribute("id", "all-button");
    this.allAnswerButton.setAttribute("id", "answer-buttons");
    this.congrats.setAttribute("id", "congratulation");
    //answer buttons
    this.answerOneHolder.setAttribute("class", "btn-answer");
    this.answerTwoHolder.setAttribute("class", "btn-answer");
    this.answerThreeHolder.setAttribute("class", "btn-answer");
    this.answerFourHolder.setAttribute("class", "btn-answer");
    //next quiz button
    this.nextBtn.setAttribute("class", "btn next");
    this.nextBtn.innerHTML = "NEXT";
    //pretty button
    this.nextBtn.classList.add('disabled')
    //add a button to open the next game
    this.startSecondGameBtn.setAttribute("href", "#second-game-section");
    this.startSecondGameBtn.setAttribute("id", "start-second-game");
    this.startSecondGameBtn.innerHTML = "hey, what is next?";
     //add image in quiz
   //  this.imageHolder.setAttribute('src', this.image)
  }
  structureSecondSection() {
    //add a new page
    parentSection.appendChild(this.secondSection);
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
    this.questionContainer.appendChild(this.allButtons);
    this.allButtons.appendChild(this.questionHolder);
    this.allButtons.appendChild(this.allAnswerButton);
    //add answer buttons separatelly
    this.allAnswerButton.appendChild(this.answerOneHolder);
    this.allAnswerButton.appendChild(this.answerTwoHolder);
    this.allAnswerButton.appendChild(this.answerThreeHolder);
    this.allAnswerButton.appendChild(this.answerFourHolder);
    //congrats (text) section
    this.allButtons.appendChild(this.congrats);
    //next quiz btn
    this.allButtons.appendChild(this.nextBtn);
     //add image in quiz
/*      this.secondSection.appendChild(this.imageWrapper)
     this.imageWrapper.appendChild(this.imageHolder) */
     
  }
  generateSecondSectionPageContent() {
    firstSectionObj.removeFirstSectionCreateSecondSection();
    this.index = 0;
    this.score = 0;
    this.createSecondPageElements();
    this.structureSecondSection();
    this.setAttributesElements();
    this.provideQuestion();
    this.showQuestionAndAnswers();
  }
  generateSecondSectionContentAndAddListeners() {
    this.generateSecondSectionPageContent();
    const myBtn = [...document.getElementsByClassName("btn-answer")];
    myBtn.forEach((element) => {
      element.addEventListener("click", function () {
        if (element.innerHTML === secondSectionObject.correctness) {
          // alert("correct");
          secondSectionObject.correctAnswer();
          secondSectionObject.scoreElement.innerHTML =
          secondSectionObject.score;
          secondSectionObject.questionHolder.innerHTML =
          secondSectionObject.question;
          secondSectionObject.congrats.innerHTML = "Correct!!!";
          //image
          //this.imageHolder.setAttribute('src', this.questions[this.index].image)
          secondSectionObject.nextBtn.disabled = false;

          //pretty buttons
          secondSectionObject.nextBtn.classList.remove('disabled')
        } else {
          //show correct answer
          secondSectionObject.questionHolder.innerHTML =
            secondSectionObject.question;
          secondSectionObject.congrats.innerHTML = `sorry, but a correct answer is ${secondSectionObject.correctness}`;
          secondSectionObject.nextBtn.disabled = false;
           //pretty buttons
           secondSectionObject.nextBtn.classList.remove('disabled')
           //image
          // secondSectionObject.imageHolder.src = secondSectionObject.image;
        }
        //work with the next button
        secondSectionObject.answerOneHolder.disabled = true;
        secondSectionObject.answerTwoHolder.disabled = true;
        secondSectionObject.answerThreeHolder.disabled = true;
        secondSectionObject.answerFourHolder.disabled = true;
        secondSectionObject.nextBtn.disabled = false;
         //pretty buttons
        secondSectionObject.answerOneHolder.classList.add('disabled')
        secondSectionObject.answerTwoHolder.classList.add('disabled')
        secondSectionObject.answerThreeHolder.classList.add('disabled')
        secondSectionObject.answerFourHolder.classList.add('disabled')
        secondSectionObject.nextBtn.classList.remove('disabled')
      });
    });
    secondSectionObject.nextBtn.addEventListener("click", function () {
      secondSectionObject.nextQuestion();
      secondSectionObject.provideQuestion();
      secondSectionObject.showQuestionAndAnswers();
    });
    secondSectionObject.startSecondGameBtn.addEventListener(
      "click",
      secondSectionObject.removeSecondPageAddThirdPage.bind(secondSectionObject)
    );
  }
  provideQuestion() {
    if (this.index === this.questions.length) {
        this.clearQuizContent();
    } else {
      this.question = this.questions[this.index].question;
      this.answerOne = this.questions[this.index].answers[1];
      this.answerTwo = this.questions[this.index].answers[2];
      this.answerThree = this.questions[this.index].answers[3];
      this.answerFour = this.questions[this.index].answers[4];
      this.correctness = this.questions[this.index].correct;
      
    }
  }
  showQuestionAndAnswers() {
    //show the question
    this.questionHolder.innerHTML = this.question;
    this.congrats.innerHTML = "";
    //show the answer option
    this.answerOneHolder.innerHTML = this.answerOne;
    this.answerTwoHolder.innerHTML = this.answerTwo;
    this.answerThreeHolder.innerHTML = this.answerThree;
    this.answerFourHolder.innerHTML = this.answerFour;
    //make the buttons clickable
    this.answerOneHolder.disabled = false;
    this.answerTwoHolder.disabled = false;
    this.answerThreeHolder.disabled = false;
    this.answerFourHolder.disabled = false;
    this.nextBtn.disabled = true;
    //pretty buttons 
    this.answerOneHolder.classList.remove('disabled')
    this.answerTwoHolder.classList.remove('disabled')
    this.answerThreeHolder.classList.remove('disabled')
    this.answerFourHolder.classList.remove('disabled')
    this.nextBtn.classList.add('disabled')
    this.scoreElement.innerHTML = this.score;
  }
  correctAnswer() {
    this.score += 1;
  }
  nextQuestion() {
    this.index += 1;
  }
  clearQuizContent() {
    this.questionHolder.remove();
    this.nextBtn.remove();
    this.answerOneHolder.remove();
    this.answerTwoHolder.remove();
    this.answerThreeHolder.remove();
    this.answerFourHolder.remove();
    //extra clear of everything
    this.allAnswerButton.remove();
    this.finalScore = 10 + this.score;
    this.startSecondGameBtn.innerHTML = "Hey, what is next?";
    this.questionContainer.appendChild(this.startSecondGameBtn);
  }
  removeSecondPageAddThirdPage() {
    parentSection.removeChild(
      parentSection.lastChild
    );
    thirdSectionObject.generateThirdPage();
  }
}

let secondSectionObject = new SecondSection(
  questionsList,
  questionsList.question,
  questionsList.answers,
  questionsList.correct, 
  questionsList.image
);

class ThirdSection {
  constructor() {
      
  }
  createThirdPageElements() {
    //generate new elements
    this.thirdSection = document.createElement("div");
    this.thirdSectionBanner = document.createElement("div");
    this.catchBtn = document.createElement("button");
    this.thirdSectionContent = document.createElement("div");
    this.info = document.createElement("div");
    this.infoP = document.createElement("p");
    this.thirdSectionScore = document.createElement("div");
    //text and score
    this.thirdScore = document.createElement("div");
    //add the catch wraper
    this.wrapperGame = document.createElement('div')
  }
  structureThirdSection() {
    parentSection.appendChild(this.thirdSection);
    this.thirdSection.appendChild(this.thirdSectionBanner);
    //add the catch wraper
    this.thirdSectionBanner.appendChild(this.wrapperGame);
    this.wrapperGame.appendChild(this.catchBtn);


   // this.thirdSectionBanner.appendChild(this.catchBtn);

    this.thirdSection.appendChild(this.thirdSectionContent);
    this.thirdSectionContent.appendChild(this.info);
    this.info.appendChild(this.infoP);
    //text and score
    this.thirdSectionContent.appendChild(this.thirdScore);
  }
  setAttributesElements() {
    this.thirdSection.setAttribute("id", "second-game-section");
    this.thirdSection.setAttribute("class", "second-game");
    this.thirdSectionBanner.setAttribute("class", "banner-second-game");
    //add the catch wraper
    this.wrapperGame.setAttribute('class', 'wrapper-game')

    this.catchBtn.setAttribute("class", "catch");
    this.catchBtn.innerHTML = "CATCH ME!";
    this.infoP.innerHTML = "So... Next challenge is - try to catch the button!";
    //score
    this.thirdSectionContent.setAttribute("id", "second-game-content");
    //text and score
    this.thirdScore.setAttribute("class", "score-wrapper-second-game");
  }
  generateThirdPage() {
    this.createThirdPageElements();
    this.structureThirdSection();
    this.setAttributesElements();
    // thirdSectionListeners();
    addListenerCatchBtn();
  }
  removeThirdPageAddFourthPage() {
    parentSection.removeChild(
      parentSection.lastChild
    );
    finalSectionObj.generateContent();
  }
}

let thirdSectionObject = new ThirdSection();

function addListenerCatchBtn() {
  thirdSectionObject.catchBtn.addEventListener("click", function () {
    thirdSectionObject.wrapperGame.classList.add("first");
    thirdSectionObject.catchBtn.addEventListener("click", function () {
      thirdSectionObject.wrapperGame.classList.remove("first");
      thirdSectionObject.wrapperGame.classList.add("second");
      thirdSectionObject.catchBtn.addEventListener("click", function () {
        thirdSectionObject.wrapperGame.classList.remove("second");
        thirdSectionObject.wrapperGame.classList.add("third");
        thirdSectionObject.catchBtn.addEventListener("click", function () {
          thirdSectionObject.info.innerHTML =
            "It was a small joke 😀 Here are 10 points for you!";
          secondSectionObject.score += 10;
          thirdSectionObject.thirdScore.innerHTML = `YOUR SCORE IS: ${secondSectionObject.finalScore}`;
          thirdSectionObject.wrapperGame.classList.toggle("third");
          thirdSectionObject.catchBtn.innerHTML = "Let's check the results!";
          thirdSectionObject.catchBtn.addEventListener("click", function () {
            thirdSectionObject.removeThirdPageAddFourthPage();
          });
        });
      });
    });
  });
}


class FinalSection {
  constructor() {

  }
  createFourthPageElements() {
    this.finalSection = document.createElement("section");
    this.layeredImage = document.createElement("div");
    this.lastBanner = document.createElement("div");
    this.lastText = document.createElement("div");
    this.animatedImage = document.createElement("img");
  }
  structureLastSection() {
    parentSection.appendChild(this.finalSection);
    this.finalSection.appendChild(this.layeredImage);
    this.layeredImage.appendChild(this.lastBanner);
    this.layeredImage.appendChild(this.lastText);
    this.layeredImage.appendChild(this.animatedImage);
  }
  setAttribute() {
    firstSectionObj.home.innerHTML = "Start game again";
    this.finalSection.setAttribute("class", "animation");
    this.layeredImage.setAttribute("class", "layered-image");
    this.lastBanner.setAttribute("class", "banner-finish-game");
    this.lastText.setAttribute("id", "congrats-text");
    this.lastText.setAttribute("class", "animation-text");
    this.lastText.innerHTML = `Yey ${firstSectionObj.inputName.value}! Your score is ${secondSectionObject.finalScore}. Congratulations and thank you very much for you time!`;
    this.animatedImage.setAttribute("src", "images/sun2.png");
  }
  generateContent() {
    this.createFourthPageElements();
    this.structureLastSection();
    this.setAttribute();
    homeRestartGameBtn();
  }
}

let finalSectionObj = new FinalSection();

function homeRestartGameBtn() {
  firstSectionObj.home.addEventListener("click", function () {
    parentSection.removeChild(
      parentSection.lastChild
    );
    // startCode();
    firstSectionObj.generateFirstSectionPageContent();
  });
}

function startCode() {
  firstSectionObj.generateFirstSectionPageContent();
}

startCode();
