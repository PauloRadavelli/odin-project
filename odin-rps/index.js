function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let randomAnswer = ['rock','paper','scissors']
    return randomAnswer[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock"
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissor beats Paper"
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Paper beats scissors"
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors"
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissor beats paper"
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock"
    }

    if(playerSelection == computerSelection){
        return "It's a Draw!"
    }
}

const playerSelection = "rock";
function game(){
    for(let i = 0 ; i < 5 ; i++){
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}