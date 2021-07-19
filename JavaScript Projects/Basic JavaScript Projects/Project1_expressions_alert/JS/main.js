window.alert("Hello"); // displays alert box with the message
document.write("Hello"); // displays text on page

var A = "This is a string"; // creates variable with a string as the value
document.write(A); // displays the value of variable A on page

var B = "This is another string";
window.alert(B);

alert("\"Hello\", said Joe."); // this displays the usage of the backslash, the quote after the backslash does not end the string
alert("I am concatenating this " + "and this together"); // this concatenates two strings together.

var C = "This" + " And"; // this is a variable with 2 concatenated strings

document.write("Hello" + A); // this concatenates a string with the string value in variable A and displays it on the page
document.write(C); // this displays the value of C on the page

var D = "1", E = "2", F = "3"; // this is a way to declare and assign multiple variables
document.write(E);

var D = D.fontcolor('blue'); // this changes the font color and update it to the var 
var E = E.fontcolor('green');
var F = F.fontcolor('red');
document.write(F + D + E); // this prints out the new var with the different font colors
document.write(3 + 3); // this is a statement containing an expression