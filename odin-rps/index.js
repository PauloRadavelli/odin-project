let computerScore = 0;
let playerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    const randomAnswer = ['rock','paper','scissors']
    return randomAnswer[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        return "You lose! Paper beats Rock"
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return "You lose! Scissor beats Paper"
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++
        return "You lose! Paper beats scissors"
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        return "You win! Rock beats scissors"
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        return "You win! Scissor beats paper"
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
        return "You win! Paper beats rock"
    }

    if(playerSelection == computerSelection){
        playerScore++
        computerScore++
        return "It's a Draw!"
    }
}

function game(){
    for(let i = 0 ; i <= 10 ; i++){
        if(computerScore == 5 || playerScore == 5){
            console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`);
            return;
        }
        console.log(playRound(prompt(), getComputerChoice()))
    }
}
