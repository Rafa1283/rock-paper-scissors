
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
    return "rock";
    } else if (randomNumber === 1) {
    return "paper";
    } else { 
    return "scissors";
    }
} 

function getHumanChoice () {
    let userChoice= prompt ("choose: rock, paper scissors").toLowerCase();
    
    if (userChoice== "rock") {
            return "you have chosen rock";
        } else if (userChoice == "paper") {
            return "you have chosen paper";
        } else {
            return "you have chosen scissors";
        }
    }
 let humanScore = 0;
 let computerScore=0;

 function playRound (computerChoice, humanChoice) {


 }