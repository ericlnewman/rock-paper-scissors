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
console.log(getComputerChoice());