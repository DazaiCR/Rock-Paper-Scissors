let humanScore = 0;
let computerScore = 0;

body = document.querySelector(".body");
content = document.querySelector(".content");

result = document.querySelector(".result");

// scores
score = document.querySelector(".score");
doc_human_score = document.querySelector(".human_score");
doc_computer_score = document.querySelector(".computer_score");



function displayWinner() {
    content.remove();
    const div = document.createElement("div");
    body.appendChild(div);
    if(humanScore === computerScore){
        div.textContent = "Oups! It's a draw.";
    }
    else if(humanScore > computerScore){
        div.textContent = "Yeey! You win.";
    }
    else{
        div.textContent = "Oups! You lose!";
    }
}

function getComputerChoice() {
    const choices = ["paper", "rock", "scissors"];
    const indx_random = Math.floor(Math.random()*3);
    return choices[indx_random];
}

// play one round
const outcomes = {
    rock: { scissors: "win", paper: "lose" },
    paper: { rock: "win", scissors: "lose" },
    scissors: { paper: "win", rock: "lose" },
};

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result.textContent = "It's a draw!";
    } 
    else if (outcomes[humanChoice][computerChoice] === "win") {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        doc_human_score.textContent = humanScore;
    } 
    else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        doc_computer_score.textContent = computerScore;
    }
}

// add event listeners to buttons
buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        playRound(event.target.className, getComputerChoice());

        if(computerScore === 5 || humanScore === 5){
            displayWinner();
        }
    });
});
