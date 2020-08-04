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
  //debug
  console.log(startBtn)
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



