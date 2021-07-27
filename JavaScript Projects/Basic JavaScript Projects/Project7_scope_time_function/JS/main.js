var x = 5;
function addNumbers() {
    return x + 5;
}

function addNumbers2() {
    return x + 20;
}

document.write(addNumbers() + "<br>");
document.write(addNumbers2() + "<br>");

function subtractNumbers() {
    var t = 25;
    return t - 5;
}

function subtractNumbers2() {
    return t - 10;
}

document.write(subtractNumbers() + "<br>");
document.write(subtractNumbers2());

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function getTime() {
    if (new Date().getHours() < 12) {
        document.getElementById("Morning").innerHTML = "Good morning!";
    }
    else document.getElementById("Morning").innerHTML = "It is after noon.";
}