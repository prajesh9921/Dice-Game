var randomnum1 = Math.floor(Math.random() * 6) + 1;
var imagename1 = "dice" + randomnum1 + ".png";
var randsrc = "images/" + imagename1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randsrc);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var imagename2 = "images/dice" + randomnum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagename2);

if (randomnum1 > randomnum2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomnum2 > randomnum1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
