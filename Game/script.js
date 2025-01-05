let humanScore = 0;
let computerScore = 0;
let result;
let retry = document.createElement("button");
let cancel = document.createElement("button");

body = document.querySelector(".body");
container = document.querySelector(".container");

// scores
score = document.querySelector(".score-nbrs");

function displayWinner() {
    const message = document.createElement("div");
    if(humanScore > computerScore){
        message.textContent = "Yeey! You win!";
    }
    else{
        message.textContent = "Oups! You lose!";
    }
    showFinalPage(message);
}

function showFinalPage(message) {
    container.remove();
    const final_result_container = document.createElement("div");
    final_result_container.classList.add("final-container");
    body.appendChild(final_result_container);

    // adding a wrapper
    const final_wrapper = document.createElement("div");
    final_wrapper.classList.add("final-result-wrapper");
    final_result_container.appendChild(final_wrapper);

    // adding final result message
    message.classList.add("final-message");
    final_wrapper.appendChild(message);

    // adding reload & cancel options
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    final_wrapper.appendChild(buttons);

    retry.textContent = "Retry";
    cancel.textContent = "Cancel";
    retry.classList.add("retry-cancel");
    cancel.classList.add("retry-cancel");
    buttons.appendChild(retry);
    buttons.appendChild(cancel);
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
    result = document.createElement("div");
    if (humanChoice === computerChoice) {
        result.textContent = "It's a draw!";
    } 
    else if (outcomes[humanChoice][computerChoice] === "win") {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } 
    else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }
    score.textContent = `${humanScore} - ${computerScore}`;
}

function showResult() {
    container.classList.add("hidden");
    
    result_container = document.createElement("div");
    result_container.classList.add("result-container");
    body.appendChild(result_container);
    
    // add the result message
    result_container.appendChild(result);
    result.classList.add("result");

    setTimeout(() => {
        result_container.remove();
        container.classList.remove("hidden");
    }, 2000);
}

// add event listeners to buttons
buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        playRound(event.target.className, getComputerChoice());
        showResult();

        if(computerScore === 5 || humanScore === 5){
            displayWinner();
        }
    });
});

retry.addEventListener("click", () => {
    location.reload();
});

cancel.addEventListener("click", () => {
    window.location.href = "about:blank";
});