
const choices = ["scissors", "paper", "rock"];

function getComputerChoice(){

    let randomComputerChoice = Math.floor(Math.random() * 3)

    return(choices[randomComputerChoice]);
}

function getPlayerChoice(message){
    let playerChoice = prompt(message).toLowerCase();

    if (playerChoice == "scissors" || playerChoice == "paper" || playerChoice == "rock")
        return playerChoice;
    else
        getPlayerChoice("Check your spelling, Scissors Paper Rock");
}

function playRound (playerSelection, computerSelection){

    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    if (playerIndex == computerIndex){
        return "draw";
    }
    if (playerIndex - computerIndex == -1 || playerIndex - computerIndex == 2){
        return "win";
    }
    else{
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

game();