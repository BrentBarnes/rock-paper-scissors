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


// Just trying to pass computerSelection and playerSelection as parameters
function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection;
    let compSelect = generateComputerSelection();
    // console.log(playerSelect)
    // console.log(compSelect)
    return compSelect;
}
// console.log(playRound());

