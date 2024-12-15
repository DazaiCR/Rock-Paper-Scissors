function getComputerChoice() {
    const choices = ["paper", "rock", "scissors"];
    const indx_random = Math.floor(Math.random()*3);
    return choices[indx_random];
}
    
function getHumanChoice() {
    while(true){
        let humanChoice = window.prompt("Enter your choice");
        humanChoice = humanChoice.toLowerCase();
    
        if(["paper", "rock", "scissors"].includes(humanChoice)){
           return humanChoice;
        }
        else{
        alert("Invalid choice! Please enter rock, paper or scissors.");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const outcomes = {
        rock: { scissors: "win", paper: "lose" },
        paper: { rock: "win", scissors: "lose" },
        scissors: { paper: "win", rock: "lose" },
    };
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } 
        else if (outcomes[humanChoice][computerChoice] === "win") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } 
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
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
    