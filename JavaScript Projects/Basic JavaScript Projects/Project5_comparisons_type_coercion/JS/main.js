document.write("10" + 5) //Example of type coercion. Results equals a string
document.write(5 + "10")
document.write(typeof "five") // Displays that "five" is a string
document.write(typeof "5") // Dislplays that "5" is a string
document.write(typeof 5) // Displays that 5 is a number
document.write(2E310); // Infinity
document.write(-3E310) // -Infinity
document.write(10 > 2);// Boolean logic: true
document.write(10 < 2);// False
document.write(10 + 10 == 20);// True
document.write(5 == 20);// False

//Example of type coercion and result will display on web page
function test1() {
    var test = "10" + 5;
    document.getElementById("1").innerHTML = test;
}
function test2() {
    var test2 = 5 + "10";
    document.getElementById("2").innerHTML = test2;
}
//Example of NaN
function myFunction() {
    document.getElementById("test").innerHTML = 0/0;
}
//Page will display true because "String" is not a number
function myFunction2() {
    document.getElementById("test2").innerHTML = isNaN("String");
}
//Page will display false because "007" is a number
function myFunction3() {
    document.getElementById("test3").innerHTML = isNaN("007");
}
//Will print on console and not web page
console.log(2*5);
console.log(2 > 5);

//dispaly that X and Y value and type are equal
X = 10;
Y = 10;
document.write(X === Y);
//display that 1 and "1" are not equal because they are different types
A = 1;
B = "1";
document.write(A === B);
// Can compare strings too
C = "Magnus";
D = "Magnus";
document.write(C === D);
// AND and OR logic
document.write( 10 > 2 && 20 > 10);
document.write( 10 < 2 && 20 > 10);
document.write( 10 < 2 || 20 > 10);
document.write( 10 < 2 || 20 < 10);
//Will display false because of the NOT operator
function notFunction() {
    document.getElementById("not").innerHTML = !(20 > 10);
}
// Will display true
function notFunction2() {
    document.getElementById("not2").innerHTML = !(5 > 10);
}