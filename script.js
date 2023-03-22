function getComputerChoice(){
    const choices = ["scissors", "paper", "rock"]

    var randomComputerChoice = Math.floor(Math.random() * 3)

    return(choices[randomComputerChoice]);
}

console.log(getComputerChoice());