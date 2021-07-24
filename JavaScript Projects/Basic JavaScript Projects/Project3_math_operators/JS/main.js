// Creates a function that creates a var that adds and displays the result
function addNumbers() {
    var addition = 5 + 6;
    document.getElementById("Add").innerHTML = "5 + 6 = " + addition;
}
//  Creates a function that creates a var that subtracts and displays the result
function subtractNumbers() {
    var subtraction = 11 - 6;
    document.getElementById("Subtract").innerHTML = "11 - 6 = " + subtraction;
}
// Creates a function that creates a var that multiplies and displays the resultes
function multiplyNumbers() {
    var multiplication = 6 * 5;
    document.getElementById("Multiply").innerHTML = "6 * 5 = " + multiplication;
}
// Divides and dispaly results
function divideNumbers() {
    var division = 30/6;
    document.getElementById("Divide").innerHTML = "30/6 = " + division;
}
// Function that utilizes multiple operators
function multipleNumbers() {
    var simpleMath = (3+5)*20/2-10;
    document.getElementById("Multiple").innerHTML = "3 plus 5, multiplied by 10, divided in half and the subtracted by 5 equals " + simpleMath;
}
// Function that divides and displays the remainder
function modulusOperator() {
    var modulus = 30 % 4;
    document.getElementById("Modulus").innerHTML = "When you divide 30 by 4 you have a remainder of: " + modulus;
}
// Displays the negative of the vlue
function negationOperator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}
// The value increments by 1
function Increment() {
    var x = 0;
    x++;
    document.getElementById("Increment").innerHTML = x;
}
// The value decrements by 1
function Decrement() {
    var x = 0;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}
// Example of how increments work and displays the value on web page.
var x = 5;
x++;
document.write(x);
// Creates a random number between 0 and 1 and displays on the page
function randomNumber() {
    document.getElementById("Random").innerHTML = Math.random();
}
// Creates a random number between 0 and 100 and then rounds the number before displaying
function random100() {
    document.getElementById("Random100").innerHTML = Math.round(Math.random()*100);
}