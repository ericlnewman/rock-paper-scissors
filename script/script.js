/*JavaScript for Rock Paper Scissors Odin Project Assignment*/

// function for single player in the console, with computer making choices:
//  it will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
    // create a number between 1 and 4 
    let number = Math.floor(Math.random()*4)+1;
    // assign a number for each of the possible choices
    const obj = {
        rock : 1,
        paper : 2,
        scissors : 3,
        paper : 4
    };
    // return the keys based on their given values that correspond to the randomly generated number:
    return Object.keys(obj).find(key => 
        obj[key] === number);
}
// console.log(getComputerChoice());
/*
function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection -
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
recall:
- rock beats scissors
- paper beats rock
- scissors beats paper
*/
function playRound(playerSelection, computerSelection){
    const p = playerSelection.toLowerCase();
    const c = computerSelection;
    if(p === c){return "It's a tie!";}
    else if(p === "rock" && c === "paper") {return "You Lose! Paper beats Rock";}
    else if(p === "rock" && c === "scissors") {return "You Win! Rock beats Scissors";}
    else if(p === "paper" && c === "scissors") {return "You Lose! Scissors beats Paper";}
    else if(p === "paper" && c === "rock") {return "You Win! Paper beats Rock";}
    else if(p === "scissors" && c === "rock") {return "You Lose! Rock beats Scissors";}
    else if (p === "scissors" && c === "paper") {return "You Win! Scissors beats Paper";}

}

console.log(playRound("RoCK", getComputerChoice()));
console.log(playRound("paPer", getComputerChoice()));
console.log(playRound("Scissors", getComputerChoice()));
console.log(playRound("sciSSORs", getComputerChoice()));