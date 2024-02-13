var p1 = prompt("Decide who will be Player 1! Please enter the name: ")
var p2 = prompt("Decide who will be Player 2! Please enter the name: ")

document.querySelector("#para1").textContent = p1;
document.querySelector("#para2").textContent = p2


var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "./images/dice" + randomNumber + ".png";
var Image1 = document.querySelector(".img1");
Image1.setAttribute("src",randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var Image2 = document.querySelector(".img2");
Image2.setAttribute("src", randomImage2);

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = p1 + " wins"
} else if (randomNumber === randomImage2) {
    document.querySelector("h1").innerHTML = "Draw"
}

else{
    document.querySelector("h1").innerHTML = p2 + " wins"
}

