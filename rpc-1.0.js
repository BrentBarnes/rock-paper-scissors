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



// creates a computer selection and stores it as variable computerSelection
    let playerScore = 0;
    let computerScore = 0;
    let scoreboard = `The score is currently: player has ${playerScore}. computer has ${computerScore}`
const rpcOptions = ["rock", "paper", "scissors"]



function generateComputerSelection() {
    let randomNumber = Math.floor((Math.random() * 3));
    let randomComputerSelection = rpcOptions[randomNumber];
    return randomComputerSelection;
}
computerSelection = generateComputerSelection();

// Creates a player input and stores it as variable playerSelection
let playerInput = prompt("Please select rock, paper, or scissors: ");
let playerSelection = playerInput.toLowerCase();





// takes playerSelection and computerSelection and plays RPC
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return "You selected something other than rock, paper, or scissors."
    }
    else if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            playerScore = playerScore + 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`
        }
    else {
        computerScore = computerScore + 1;
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}
let result = playRound(playerSelection, computerSelection);

playRound(playerSelection, computerSelection);

// function incrementScore(result) {
//     if (result === `You win! ${playerSelection} beats ${computerSelection}.`) {
//         playerScore = playerScore + 1;
//         return playerScore;
//     }
//     else if (result === `You lose! ${computerSelection} beats ${playerSelection}.`) {
//         computerScore = computerScore + 1;
//         return computerScore;
//     }
//     else {
//         return "It's a draw!";
//     }
// }
// let winnerPoint = increment(result);
// console.log(incrementScore(result))


// function game() {
//     // let result = playRound(playerSelection, computerSelection);
// //     let playerScore = 0;
// //     let computerScore = 0;
// //     let scoreboard = `The score is currently: player has ${playerScore}. computer has ${computerScore}`

//     playRound(playerSelection, computerSelection);

// }


// console.log(playRound(playerSelection, computerSelection));
// console.log(incrementScore(result))
// console.log(game());

console.log(playerScore);
console.log(computerScore);