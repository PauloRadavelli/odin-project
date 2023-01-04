const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userDisplay = document.querySelector("#user-score");
const computerDisplay = document.querySelector("#computer-score")

const options = ["rock","paper","scissors"];
let computerScore = 0;
let userScore = 0;
let userChoice;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return options[getRandomInt(3)]
}

function onRockClick() {
    userChoice = "rock";
    let computerChoice = getComputerChoice();
    if(computerChoice == "paper"){
        computerScore++;
    }
    if(computerChoice == "scissors"){
        userScore++;
    }
    userDisplay.textContent = "Your score: "+userScore;
    computerDisplay.textContent = "Computer score: "+computerScore

}

function onPaperClick() {
    userChoice = "paper";
    let computerChoice = getComputerChoice();
    if(computerChoice == "scissors"){
        computerScore++;
    }
    if(computerChoice == "rock"){
        userScore++;
    }
    userDisplay.textContent = "Your score: "+userScore;
    computerDisplay.textContent = "Computer score: "+computerScore
}

function onScissorsClick(){
    userChoice = "scissors";
    let computerChoice = getComputerChoice();
    if(computerChoice == "rock"){
        computerScore++
    }
    if(computerChoice == "paper"){
        userScore++
    }
    userDisplay.textContent = "Your score: "+userScore;
    computerDisplay.textContent = "Computer score: "+computerScore
}