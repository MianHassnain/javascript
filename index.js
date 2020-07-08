// document.querySelector("button.w").addEventListener("click", function()
// {
//   alert("I got clicked");
// }
// );


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnumation(buttonClicked);
  });
}


document.addEventListener("keypress", function(e)
{
  var buttonPressed = e.key;
  makeSound(buttonPressed);
  buttonAnumation(buttonPressed);
}
);

function makeSound(key)
{
  switch (key) {
    case "w":
      var myAudio = new Audio("sounds/tom-1.mp3");
      myAudio.play();
      break;
    case "a":
      var myAudio = new Audio("sounds/tom-2.mp3");
      myAudio.play();
      break;
    case "s":
      var myAudio = new Audio("sounds/tom-3.mp3");
      myAudio.play();
      break;
    case "d":
      var myAudio = new Audio("sounds/tom-4.mp3");
      myAudio.play();
      break;
    case "j":
      var myAudio = new Audio("sounds/snare.mp3");
      myAudio.play();
      break;
    case "k":
      var myAudio = new Audio("sounds/kick-bass.mp3");
      myAudio.play();
      break;
    case "l":
      var myAudio = new Audio("sounds/crash.mp3");
      myAudio.play();
      break;
    default:
      alert("Not working");

  }
}

function buttonAnumation(keyPressed)
{
   var activeButton = document.querySelector("."+keyPressed);
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100);
}
