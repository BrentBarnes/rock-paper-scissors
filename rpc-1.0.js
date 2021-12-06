// create an array with strings "Rock", "Paper", "Scissors"
// create function called randomComputerSelection
// create a variable called computerSelection to store randomly selected rock paper or scissors from array
// return computerSelection

// an input prompt will collect the player's selection and store that as playerSelection
//playerSelection will be converted to all lowercase to allow case-insensitivity


// The playRound function will take two parameters: playerSelection & computerSelection
// if playerSelection is rock AND computerSelection is scissors, 
// OR if playerSelection is paper AND computerSelection is rock, 
// OR if playerSelection is scissors AND computerSelection is paper, return You Win! Scissors beats Paper
// return `You Win! ${playerSelection} beats ${computerSelection}`
// iterate playerScore iterate +1
// otherwise return `You Lose! ${computerSelection} beats ${playerSelection}`
// iterate computer score +1



    let playerScore = 0;
    let computerScore = 0;
    let scoreBoard = `The score is currently: player has ${playerScore}. computer has ${computerScore}`
    const rpcOptions = ["rock", "paper", "scissors"]

// creates a computer selection and stores it as variable computerSelection
function computerSelection() {
    let randomNumber = Math.floor((Math.random() * 3));
    let randomComputerSelection = rpcOptions[randomNumber];
    return randomComputerSelection;
}


// Prompts user for seclection & converts it toLowerCase for case-insensitivity
function playerSelection() {
    let playerInput = prompt("Please select rock, paper, or scissors: ");
    let playerSelectionToLowerCase = playerInput.toLowerCase();
    return playerSelectionToLowerCase;
}




// Takes playerSelection and computerSelection and plays RPC logic.
//also, iterates playerScore or computerScore + 1
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection();
    let computerChoice = computerSelection();

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        return "You selected something other than rock, paper, or scissors."
    }
    else if (playerChoice === computerChoice) {
        return `It's a draw!  ${scoreBoard}`;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" || 
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper") {
            playerScore = playerScore + 1;
            return `You win! ${playerChoice} beats ${computerChoice}. ${scoreBoard}`
        }
    else {
        computerScore = computerScore + 1;
        return `You lose! ${computerChoice} beats ${playerChoice}. ${scoreBoard}`
    }
}

//executes playRound and returns win/lose & point given to console
function game() {

    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore);
    console.log(computerScore);

}

//Plays game 5 times total and keeps score. Repeated instead of looped.
game();
game();
game();
game();
game();
