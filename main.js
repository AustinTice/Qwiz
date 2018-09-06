let question = document.getElementById("question");
let answer = document.getElementById("answer");
let button = document.getElementById("submit");
let randomNumber1 = Math.floor(Math.random() * 20);
let randomNumber2 = Math.floor(Math.random() * 20);
// waiting for the submit button to be clicked to which we'll be running the checkAnswer function
button.addEventListener("click", checkAnswer);
// init the sign to be an empty string so that later we can manip this value at the global level.
let signPicked = "";

// Checking to see if the window has loaded and once it has we will grab the first question.
window.addEventListener("load", function(){
  getRandomSign();
  postRandomNumbersForQuestion();
})

// This function is just a simple and easy-to-read definition to help post the next question to the screen.
function postRandomNumbersForQuestion(){
  question.innerHTML = `What is ${randomNumber1} ${signPicked} ${randomNumber2}?`
}

// This function will run once the submit button is clicked and allow for input validation, and
// to check the validity of the answer given.
function checkAnswer() {
  let correctAnswer = eval(`randomNumber1 ${signPicked} randomNumber2`);
  if(answer.value == correctAnswer){
    alert("You've done it!");
  }
  else{
    alert("Im sorry, that's incorrect");
  }
  reset();
}

// Interacts with the reset function in allowing a new random sign to be chosen
// for each question.
function getRandomSign(){
  let possibleSigns = ["+", "-", "*", "/" ];
  let randomIndex = Math.floor(Math.random() * (possibleSigns.length - 1));
  signPicked = possibleSigns[randomIndex];
}

// Allows for new random numbers to be chosen for each question
// by shuffling each of the numbers that will be presented
function shuffleRandomNumber(){
  randomNumber1 = Math.floor(Math.random() * 10);
  randomNumber2 = Math.floor(Math.random() * 10);
}

// This function contains the code that resets the problems after each and every answer is submitted.
function reset(){
  answer.value = "";
  shuffleRandomNumber();
  getRandomSign();
  postRandomNumbersForQuestion();
}
