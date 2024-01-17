/*JavaScript for Rock Paper Scissors Odin Project Assignment*/


// change: added UI buttons that are placed in newly added div within HTML
const container = document.querySelector("#container");
const h3Header = document.createElement("h3");
const h4Header = document.createElement("h4");
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const paperBtn = document.createElement("button");


h3Header.textContent = "Rock, Paper, Scissors!"
h4Header.textContent = "Play some rounds against the computer in the console! Can you win????? (press f12 to see the console)"
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";


rockBtn.id = "rockBtn";
scissorsBtn.id = "scissorsBtn";
paperBtn.id = "paperBtn";

container.appendChild(h3Header);
container.appendChild(h4Header);
container.appendChild(rockBtn);
container.appendChild(scissorsBtn);
container.appendChild(paperBtn);


// added: function to handle the different outcomes when a button is pressed
function getUserChoice(target){
    switch(target){
        case "rockBtn":
            return "rock";
        case "scissorsBtn":
            return "scissors";
        case "paperBtn":
            return "paper";
        default:
            return "";
    }
}
// added: promise to pause the for loop and wait user input
function waitForUserInput(){
    return new Promise((resolve) =>{
        container.addEventListener("click", function handleClick(e){
            const userChoice = getUserChoice(e.target.id);
            resolve(userChoice);
            container.removeEventListener("click", handleClick);
        });
    });
}
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
/*
function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection -
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
recall:
- rock beats scissors
- paper beats rock
- scissors beats paper
*/
function playRound(playerSelection, computerSelection){
    // change: made computerSelection be assigned the getComputerChoice, without having to call it in other functions
    if(computerSelection === undefined){
        computerSelection = getComputerChoice();
    }
    const p = playerSelection;
    const c = computerSelection;
    if(p === c || c == undefined){return "It's a tie!";}
    else if(p === "rock" && c === "paper") {return "You Lose! Paper beats Rock";}
    else if(p === "rock" && c === "scissors") {return "You Win! Rock beats Scissors";}
    else if(p === "paper" && c === "scissors") {return "You Lose! Scissors beats Paper";}
    else if(p === "paper" && c === "rock") {return "You Win! Paper beats Rock";}
    else if(p === "scissors" && c === "rock") {return "You Lose! Rock beats Scissors";}
    else if(p === "scissors" && c === "paper") {return "You Win! Scissors beats Paper";}
}

// changed: game function into an async/await that uses the waitForUserInput promise to wait for button clicks
async function game(){
    console.log("Welcome to Rock, Paper, Scissors! Play 5 rounds against the computer! Can you win?????");
    let tally = 5;
    for(let i = 0; i < 5; i++){
        const userInput = await waitForUserInput();
        const currentRound = playRound(userInput);
        console.log(currentRound);
        // changed means to decrement tally to determiner winner
        if(currentRound.includes("You Win!")){
            tally--;
        }
    }
    let resultOfRounds;
    const resultsDiv = document.createElement("div");
    const spanResult = document.createElement("span");
    if(tally < 3){resultOfRounds = "You won!";}
    else {resultOfRounds = "You lost!";}
    spanResult.textContent = resultOfRounds;
    resultsDiv.appendChild(spanResult);
    container.appendChild(resultsDiv);
}
console.log(game());
