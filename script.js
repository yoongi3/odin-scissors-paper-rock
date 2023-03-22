
const choices = ["scissors", "paper", "rock"];

function getComputerChoice(){

    var randomComputerChoice = Math.floor(Math.random() * 3)

    return(choices[randomComputerChoice]);
}
function playRound (playerSelection, computerSelection){

    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == computerIndex)
        return "It's a draw!";
    if (playerIndex - computerIndex == -1 || playerIndex - computerIndex == 2)
        return "you win!";
    else 
        return "you lose!";
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log("computer: " + computerSelection + " vs " + "player: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));