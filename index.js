var drumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumButtons ; i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
var crash = new Audio("sounds/crash.mp3");
crash.play();})
}

