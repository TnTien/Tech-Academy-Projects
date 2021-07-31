//concat() method
function full_Sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice() method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function sliced() {
    var sentence1 = "Here is a sentence.";
    var slicedSentence1 = sentence1.slice(10, 18);
    document.getElementById("sliced").innerHTML = slicedSentence1;
}

//toUpperCase() method
function upper() {
    var toUpper = "This sentence will be in uppercase."
    document.getElementById("upper").innerHTML = toUpper.toUpperCase();
}

//search() method
function find() {
    var sentence = "Tech Academy"
    document.getElementById("search").innerHTML = sentence.search("Academy");
}

//Numbers to string
function string_Method() {
    var X = 205;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() method
function precision_Method() {
    var X = 55546824.3004545845;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed(digit) method, converts number to a string, can include # of digit after the decimal point 
var num = 105.8912342;
document.write(num.toFixed(2) + "<br>")
//valueOf() method, returns the primitive value or string representation of an object
document.write(num.valueOf());