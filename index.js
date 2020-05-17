

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (i=0; i<numberOfDrumButtons; i++) {


// Checking for clicks
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  })
}

// Checking for keyboard strokes
document.addEventListener("keydown", function() {

  makeSound(event.key);
  buttonAnimation(event.key);

});

// Testing/Checking to see if the Clicks OR Strokes match.
function makeSound(key) {

  switch (key) {

    case "w":

      var audio = new Audio("sounds/crash.mp3");
      return audio.play();

      break;

    case "a":

      var audio = new Audio("sounds/kick-bass.mp3");
      return audio.play();

      break;

    case "s":

      var audio = new Audio("sounds/snare.mp3");
      return audio.play();

      break;

    case "d":

      var audio = new Audio("sounds/tom-1.mp3");
      return audio.play();

      break;

    case "j":

      var audio = new Audio("sounds/tom-2.mp3");
      return audio.play();

      break;

    case "k":

      var audio = new Audio("sounds/tom-3.mp3");
      return audio.play();

      break;

    case "l":

      var audio = new Audio("sounds/tom-4.mp3");
      return audio.play();

      break;


    default: console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
