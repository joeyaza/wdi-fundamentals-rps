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
