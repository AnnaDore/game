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
    this.p.innerHTML = "";
    this.startBtn.remove();
    this.inputName.value = "";
  }
  hideFurstSection() {
    this.fisrtSection.classList.add("hide");
  }
  removeANdHideFirstSection() {
    //prepare for the next game iteration and hide the section
    this.cleanFirstSection();
    this.hideFurstSection();
    console.log("home");
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
    "click",
    secondSectionObject.generateSecondSectionPageContent.bind(
      secondSectionObject
    )
  );
}

class SecondSection {
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
    this.allAnswerButton = document.createElement('div')
    this.answerOneHolder = document.createElement('button');
    this.answerTwoHolder = document.createElement('button');
    this.answerThreeHolder = document.createElement('button');
    this.answerFourHolder = document.createElement('button');


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
    this.allAnswerButton.setAttribute('id', 'answer-buttons');



  }
  structureSecondSection() {
    this.parentSection.appendChild(this.secondSection);
    this.secondSection.appendChild(this.secondSectionBackground);
    this.secondSection.appendChild(this.questionContainer);
    this.questionContainer.appendChild(this.scoreWrapper);
    this.scoreWrapper.appendChild(this.scoreText);
    this.scoreWrapper.appendChild(this.scoreElement);
     //elements for the question, answers, button
     this.allAnswerButton = [this.answerOneHolder, this.answerTwoHolder, this.answerThreeHolder, this.answerFourHolder]
     this.questionContainer.appendChild(this.questionHolder);
     this.questionContainer.appendChild(this.allAnswerButton);
    // this.secondSection.appendChild(this.questionHolder);

    

  }
  generateSecondSectionPageContent() {
    firstSectionObj.removeANdHideFirstSection();
    this.setAttributesElements();
    this.structureSecondSection();
    console.log(this.secondSectionBackground);
  }
  showData() {
    this.questionHolder.innerHTML = this.question;

  }
}

let secondSectionObject = new SecondSection(questionsList, questionsList.question, questionsList.answers, questionsList.correct);

function addEventListenersSecondSection() {}

function startCode() {
  firstSectionObj.generateFirstSectionPageContent();
  addEventListenersFirstSection();
}

startCode();
