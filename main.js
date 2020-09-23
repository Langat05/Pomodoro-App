var minutes = 25;
var seconds = "00";

var click = new Audio("click.mp3");
var bell = new Audio ("bell.mp3");

function template(){
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
}

function start(){
    click.play();

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

