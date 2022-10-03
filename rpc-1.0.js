let playerScore = 0;
let computerScore = 0;
const rpcOptions = ["rock", "paper", "scissors"]

const playerScoreDiv = document.querySelector('.score__player');
const computerScoreDiv = document.querySelector('.score__computer');
const header = document.querySelector('.header');
const rockDiv = document.querySelector('.button__rock')
const paperDiv = document.querySelector('.button__paper')
const scissorsDiv = document.querySelector('.button__scissors')

const outcomeDiv = document.createElement('div')
const replayButton = document.createElement('button')

function computerSelection() {
    let randomNumber = Math.floor((Math.random() * 3));
    let randomComputerSelection = rpcOptions[randomNumber];
    return randomComputerSelection;
}

function playRound(playerChoice, computerSelection) {

    header.appendChild(outcomeDiv);

    let computerChoice = computerSelection();
    console.log(playerChoice);
    console.log(computerChoice);


     if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        return "You selected something other than rock, paper, or scissors."
     }
     else if (playerChoice === computerChoice) {
        outcomeDiv.innerText = `It's a draw! ${playerChoice} ties with ${computerChoice}.`
        return `It's a draw!`;
     }
     else if (playerChoice === "rock" && computerChoice === "scissors" || 
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            playerScore = playerScore + 1;
            playerScoreDiv.textContent = `Player Score: ${playerScore}`
            outcomeDiv.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
            return `You win! ${playerChoice} beats ${computerChoice}.`
         }
     else {
        computerScore = computerScore + 1;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
        outcomeDiv.innerText = `You lose! ${computerChoice} beats ${playerChoice}.`;
        return `You lose! ${computerChoice} beats ${playerChoice}.`
     }
}

let disableButtons = function() {
    rockDiv.setAttribute('disabled', '1');
    paperDiv.setAttribute('disabled', '1');
    scissorsDiv.setAttribute('disabled', '1');
}

function replayListener() {
    header.appendChild(replayButton);
        replayButton.textContent = 'Replay Game?';
        replayButton.addEventListener('click', (e) => {
            resetGame();
        });
}

function resetGame() {
    rockDiv.removeAttribute('disabled', '1');
    paperDiv.removeAttribute('disabled', '1');
    scissorsDiv.removeAttribute('disabled', '1');
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    header.removeChild(replayButton);
    header.removeChild(outcomeDiv);

}

const btns = document.querySelectorAll("button");

btns.forEach((button) => {

    button.addEventListener('click', function(e) { 
    let playerChoice = e.target.textContent.toLowerCase();
    console.log(playRound(playerChoice, computerSelection));

        if (playerScore > computerScore && playerScore >= 5) {
            outcomeDiv.textContent = 'You won the game!';
            disableButtons();
            replayListener();
        } else if (computerScore > playerScore && computerScore >= 5) {
            outcomeDiv.textContent = 'You lost the game!';
            disableButtons();
            replayListener();
        }
    });
});