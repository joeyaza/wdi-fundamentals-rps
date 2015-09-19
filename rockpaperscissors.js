////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt()
};

function randomPlay() {
   var random = Math.random();
   var computerMove
   if(random < 0.33){
      computerMove = "rock" 
   }else if(random < 0.66){
      computerMove = "paper"
   } else {
     computerMove = "scissors"  
   }
    return computerMove
    
};
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
var player = move || getInput();
    return player;
};

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

var computer = move || randomPlay();
    return computer;
}       
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == "rock") {
        if (computerMove== "scissors") {
            winner="player";
        }
        else if (computerMove== "paper") {
            winner="computer";
        }
        else {
            winner="tie";
        }
    }
    else if (playerMove== "scissors") {
        if (computerMove== "paper") {
            winner = "player";
        }
        else if (computerMove=="rock"){
        winner= "computer";
        }
        else {
        winner="tie";
        }
    }
    else if (playerMove=="paper") {
        if (computerMove == "rock") {
            winner="player";
        }
        else if (computerMove== "scissors") {
            winner = "computer";
        }
        else {
            winner="tie"
        }
    }

    return winner;


}