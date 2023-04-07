
const choices = ["scissors", "paper", "rock"];

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

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

    getComputerChoice();
    console.log("player " + playerSelection);
    console.log("computer " + computerSelection);

    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == computerIndex){
        console.log("draw");
        return "draw";
    }
    if (playerIndex - computerIndex == -1 || playerIndex - computerIndex == 2){
        console.log("win");
        return "win";
    }
    else{
        console.log("lose");
        return "lose";
    }
}

function game(){
    const numberOfRounds = 5;

    var playerScore = 0;
    var computerScore = 0;

    for (i = 1; i <= numberOfRounds; i++){
        var playerSelection = getPlayerChoice("Scissors Paper Rock!");
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection);

        console.log("Round " + i + ": player choice: " + playerSelection + " || computer choice: " + computerSelection)
        
        round;

        if(round == "draw"){
            console.log("This round was a draw.");
            console.log("The Score is " + playerScore + " : " + computerScore);  
        }
        if(round == "win"){
            playerScore += 1;
            console.log("You win this round");
            console.log("The Score is " + playerScore + " : " + computerScore);  

        }
        if(round == "lose"){
            computerScore += 1;
            console.log("You lose this round");
            console.log("The Score is " + playerScore + " : " + computerScore);  
        }
    }

    console.log("The final score is " + playerScore + " : " + computerScore);
    if (playerScore == computerScore)
        console.log("It's a Draw :)");
    if (playerScore > computerScore)
        console.log("You Win :D");
    if (playerScore < computerScore)
        console.log("You Lose :(");   
}
