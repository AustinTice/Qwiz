let question = document.getElementById("question");
let answer = document.getElementById("answer");
let button = document.getElementById("submit");
let randomNumber1 = Math.floor(Math.random() * 20);
let randomNumber2 = Math.floor(Math.random() * 20);
button.addEventListener("click", checkAnswer);
let signPicked = "";

window.addEventListener("load", function(){
  getRandomSign();
  postRandomNumbersForQuestion();
})

function postRandomNumbersForQuestion(){
  question.innerHTML = `What is ${randomNumber1} ${signPicked} ${randomNumber2}?`
}

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

function getRandomSign(){
  let possibleSigns = ["+", "-", "*", "/" ];
  let randomIndex = Math.floor(Math.random() * (possibleSigns.length - 1));
  signPicked = possibleSigns[randomIndex];
}

function shuffleRandomNumber(){
  randomNumber1 = Math.floor(Math.random() * 20);
  randomNumber2 = Math.floor(Math.random() * 20);
}

function reset(){
  answer.value = "";
  shuffleRandomNumber();
  getRandomSign();
  postRandomNumbersForQuestion();
}
