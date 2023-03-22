
const choices = ["scissors", "paper", "rock"];
//const results = ["lose", "draw", "win"];

function getComputerChoice(){

    var randomComputerChoice = Math.floor(Math.random() * 3)

    return(choices[randomComputerChoice]);
}

function playRound (playerSelection, computerSelection){

    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);

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
        const computerSelection = getComputerChoice();
        const playerSelection = prompt();
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