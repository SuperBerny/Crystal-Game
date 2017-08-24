//At the start of the game the player will be given a random number to match in order to win
//A new random number must be generated at the start of every new game
//When the player clicks the crystal, it will add specific amount of points to their total.
//The value of each crystal is hidden from the player
//The total score will be displayed
//Crystal point value changes at the start of each new game
//Clicking on a crystal will update the player's score
//The player wins if they match the randomly generated number
//The player loses if they go over the randomly generated number
//The game resets when the player wins or loses
//The game must display total wins and loses
//!!IMPORTANT!! The game must reset itself. You cannot refresh the page
   //to restart the game
//

$(document).ready(function(){
//random chooses a random number to be matched at the beginning of the game
var random= Math.floor(Math.random()*101+19);

//this grabs puts the value of random into the #randomnumber div
$("#randomnumber").text(random);

//these 4 variables will create 4 random numbers between 1-12 for the crystal images
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 =  Math.floor(Math.random() * 11 + 1);
var num3 =  Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

//Declare variables for userTotal, wins, and losses

var userTotal = 0;
var wins = 0;
var losses = 0;

//These display totals on the html
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

//functions

function reset(){
   random = Math.floor(Math.random()* 101 + 19);
   $("#randomnumber").text(random);
   var num1 = Math.floor(Math.random() * 11 + 1);
   var num2 =  Math.floor(Math.random() * 11 + 1);
   var num3 =  Math.floor(Math.random() * 11 + 1);
   var num4 = Math.floor(Math.random() * 11 + 1);
   userTotal = 0;
   $("#score").html(userTotal);
}

function win(){
   alert("You Win!");
   wins++; 
   $("#wins").html("Wins: " + wins);  
}

function lose(){
   alert("You Lose!");
   losses++;
   $("#losses").html("Losses: " + losses);
}

//button click jQuery functions
$("#btn1").on("click", function(){
   userTotal = userTotal + num1;
   $("#score").html(userTotal);
   if(userTotal == random){
      win();
      reset();
   } else if (userTotal > random){
      lose();
      reset();
   }
})

$("#btn2").on("click", function(){
   userTotal = userTotal + num2;
   $("#score").html(userTotal);
   if(userTotal == random){
      win();
      reset();
   } else if (userTotal > random){
      lose();
      reset();
   }
})

$("#btn3").on("click", function(){
   userTotal = userTotal + num3;
   $("#score").html(userTotal);
   if(userTotal == random){
      win();
      reset();
   } else if (userTotal > random){
      lose();
      reset();
   }
})

$("#btn4").on("click", function(){
   userTotal = userTotal + num4;
   $("#score").html(userTotal);
   if(userTotal == random){
      win();
      reset();
   } else if (userTotal > random){
      lose();
      reset();
   }
})

}); // document ready function  



