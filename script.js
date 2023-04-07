
const choices = ["scissors", "paper", "rock"];

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

const container = document.querySelector('.result');
const result = document.createElement('div');
const scoreboard = document.createElement('div');
container.appendChild(result);
container.appendChild(scoreboard);

let round = 0;
let playerScore = 0;
let computerScore = 0;

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


function playRound (playerSelection){
    round += 1;

    while (result.firstChild)
        result.firstChild.remove();

    getComputerChoice();

    let currentRound = ("round: " + round + " player: " + playerSelection + " computer: " + computerSelection + " ");

    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == computerIndex){
        const newContent = document.createTextNode(currentRound + "It's a draw :|");
        result.appendChild(newContent);
        updateScore();
        return;
    }
    if (playerIndex - computerIndex == -1 || playerIndex - computerIndex == 2){
        const newContent = document.createTextNode(currentRound + "You win :)");
        result.appendChild(newContent);
        playerScore+=1;
        updateScore();
        return; 
    }
    else{
        const newContent = document.createTextNode(currentRound + "You lose :(");
        result.appendChild(newContent);
        computerScore+=1;
        updateScore();
        return;
    }
}

function updateScore(){
    while (scoreboard.firstChild)
        scoreboard.firstChild.remove();

    let score = playerScore+" : "+computerScore;
    let scoreContent = document.createTextNode("o");
    if(playerScore >= 5){
        scoreContent = document.createTextNode(score + " The player wins! :) ~Game Over~");
        scoreboard.appendChild(scoreContent);
        return;
    }
    if(computerScore >= 5){
        scoreContent = document.createTextNode(score + " The computer wins! :( ~Game Over~");
        scoreboard.appendChild(scoreContent);
        return;
    }
    else{
        scoreContent = document.createTextNode(score);
        scoreboard.appendChild(scoreContent);
    }
}
