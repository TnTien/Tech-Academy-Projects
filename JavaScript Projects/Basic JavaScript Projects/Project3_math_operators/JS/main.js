function addNumbers() {
    var addition = 5 + 6;
    document.getElementById("Add").innerHTML = "5 + 6 = " + addition;
}

function subtractNumbers() {
    var subtraction = 11 - 6;
    document.getElementById("Subtract").innerHTML = "11 - 6 = " + subtraction;
}

function multiplyNumbers() {
    var multiplication = 6 * 5;
    document.getElementById("Multiply").innerHTML = "6 * 5 = " + multiplication;
}

function divideNumbers() {
    var division = 30/6;
    document.getElementById("Divide").innerHTML = "30/6 = " + division;
}

function multipleNumbers() {
    var simpleMath = (3+5)*20/2-10;
    document.getElementById("Multiple").innerHTML = "3 plus 5, multiplied by 10, divided in half and the subtracted by 5 equals " + simpleMath;
}

function modulusOperator() {
    var modulus = 30 % 4;
    document.getElementById("Modulus").innerHTML = "When you divide 30 by 4 you have a remainder of: " + modulus;
}

function negationOperator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}

function Increment() {
    var x = 0;
    x++;
    document.getElementById("Increment").innerHTML = x;
}

function Decrement() {
    var x = 0;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}

var x = 5;
x++;
document.write(x);

function randomNumber() {
    document.getElementById("Random").innerHTML = Math.random();
}

function random100() {
    document.getElementById("Random100").innerHTML = Math.round(Math.random()*100);
}