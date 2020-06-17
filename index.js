const rand1 = Math.floor(Math.random() * 6) + 1;
const rand2 = Math.floor(Math.random() * 6) + 1;
var ima1 = "images/dice" + rand1 + ".png";
var ima2 = "images/dice" + rand2 + ".png";
document.getElementsByClassName('img1')[0].setAttribute("src", ima1);
document.getElementsByClassName('img2')[0].setAttribute("src", ima2);

if (rand1 > rand2) {
    document.querySelector('h1').innerHTML = "🚩PLAYER 1 WINS!"
} else if (rand1 < rand2) {
    document.querySelector('h1').innerHTML = "🚩PLAYER 2 WINS!"
} else {
    document.querySelector('h1').innerHTML = "🏳DRAW!"
}