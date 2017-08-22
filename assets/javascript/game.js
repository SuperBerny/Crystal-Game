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

function reset(){
   
}
var crystalValue = 0;

//this variable to the number to be matched
var targetNumber = 30;
//this variable is the global counter variable
var counter = 0;
//this grabs the div #randomnumber and puts the variable into the html
$("#randomnumber").text(targetNumber);

//this array will be used to generate randoms values for the crystals
function numberOptions(min, max) {
   min = Math.ceil(1);
   max = Math.floor(12);
   //The maximum is exclusive and the minimum is inclusive
   for(var i=0;i < 12 ;i++){
   crystalValue =  Math.floor(Math.random() * (max - min)) + min;
 }
}
 
 //Calling targetNumber function
 numberOptions(1, 12);
//this for loop with place the new random values on the crystals
      // for (var i =0; i < numberOptions.length; i++){

      // var crystalValue = $("#btn1, #btn2, #btn3, #btn4");

      // crystalValue.attr("data-crystalValue", numberOptions(1,12));

      // }
//this on-click event will respond to button clicks of the crystal images
$("#btn1, #btn2, #btn3, #btn4").on("click",function(){

  var points = ($("#btn1, #btn2, #btn3, #btn4").attr("data-crystalValue"));
   points = parseInt(points); 

//add points to the "counter" variable which is a global variable
counter += points;
alert("You're new score is " + counter);

if (counter === targetNumber) {
   alert("You Win!");
}

if (counter >= targetNumber){
   alert("You Lose!");

}
})


