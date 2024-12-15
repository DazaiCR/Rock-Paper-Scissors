function getComputerChoice() { 
    let random = Math.floor(Math.random()*100);  
    if (random < 33) {
        return "rock";
    }
    else if (random < 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
    
function getHumanChoice() {
    let human_choice = window.prompt("Enter your choice");
    
    if (human_choice.toLowerCase() === "rock") {
        return "rock";
    }
    else if (human_choice.toLowerCase() === "paper") {
        return "paper";
    }
    else if (human_choice.toLowerCase() === "scissors") {
        return "scissors";
    }
    else {
        alert("Invalid choice!"); 
        return getHumanChoice();
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
        
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log("It's a draw!");
        }
        else {
            if (humanChoice === "rock"){
                if (computerChoice === "paper"){
                    computerScore++;
                    console.log("You lose! Paper beats Rock.");
                }
                else{
                    humanScore++;
                    console.log("You win! Rock beats Scissors.");
                }
            }
            else if (humanChoice === "paper"){
                if (computerChoice === "scissors"){
                    computerScore++;
                    console.log("You lose! Scissors beats Paper.");
                }
                else{
                    humanScore++;
                    console.log("You win! Paper beats Rock.");
                }
            }
            else{
                if (computerChoice === "paper"){
                    humanScore++;
                    console.log("You win! Scissors beats Paper.");
                }
                else{
                    computerScore++;
                    console.log("You lose! Scissors beats Rock.");
                }
            }
        }
    }
    
    for(let i=0; i<5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if(humanScore === computerScore){
        alert("Oups! It's a draw.");
    }
    else if(humanScore > computerScore){
        alert("Yeey! You win.");
    }
    else{
        alert("Oups! You lose!");
    }
}

playGame();
    