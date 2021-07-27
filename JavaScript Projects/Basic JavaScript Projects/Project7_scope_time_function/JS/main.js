//Global variables
var x = 5;
function addNumbers() {
    return x + 5;
}

function addNumbers2() {
    return x + 20;
}

document.write(addNumbers() + "<br>");
document.write(addNumbers2() + "<br>");

//Local variables
function subtractNumbers() {
    var t = 25;
    return t - 5;
}
//Will return an error because t is not defined
function subtractNumbers2() {
    return t - 10;
}
document.write(subtractNumbers() + "<br>");
document.write(subtractNumbers2());

//If statement
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//If Else Statement
function getTime() {
    if (new Date().getHours() < 12) {
        document.getElementById("Morning").innerHTML = "Good morning!";
    }
    else document.getElementById("Morning").innerHTML = "It is after noon.";
}

function ranNum() {
    var str = Math.round(Math.random() * 100)
    if (str < 50){
        document.getElementById("random").innerHTML = "The number is less than 50. The number is " + str;
    }
    else document.getElementById("random").innerHTML = "The number is greater than 50. The number is " + str;
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!"
    }
    else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function numberFunction() {
    num = document.getElementById("number").value;
    if (num >= 30) {
        display = "The number you entered is greater than or equal to 30."
    }
    else {
        display = "The number you entered is less than 30."
    }
    document.getElementById("Chosen_Number").innerHTML = display;
}
//If, Else if, Else Statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}