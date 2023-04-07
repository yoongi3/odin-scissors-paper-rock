
const choices = ["scissors", "paper", "rock"];

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let round = 0;
rockBtn.addEventListener("click", function() {
    playerSelection = "rock";
    playRound(playerSelection);
})

paperBtn.addEventListener("click", function() {
    playerSelection = "paper";
    playRound(playerSelection);
})

scissorsBtn.addEventListener("click", function() {
    playerSelection = "scissors";
    playRound(playerSelection);
})

function getComputerChoice(){

    let randomComputerChoice = Math.floor(Math.random() * 3)

    computerSelection = choices[randomComputerChoice];
}

const container = document.querySelector('.result');
const newDiv = document.createElement('div');    
container.appendChild(newDiv);

function playRound (playerSelection){
    round += 1;

    while (newDiv.firstChild)
        newDiv.firstChild.remove();

    getComputerChoice();

    let currentRound = ("round: " + round + " player: " + playerSelection + " computer: " + computerSelection + " ");

    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == computerIndex){
        const newContent = document.createTextNode(currentRound + "It's a draw :|");
        newDiv.appendChild(newContent);
        return "draw";
    }
    if (playerIndex - computerIndex == -1 || playerIndex - computerIndex == 2){
        const newContent = document.createTextNode(currentRound + "You win :)");
        newDiv.appendChild(newContent);
        return "win";
    }
    else{
        const newContent = document.createTextNode(currentRound + "You lose :(");
        newDiv.appendChild(newContent);
        return "lose";
    }
}
