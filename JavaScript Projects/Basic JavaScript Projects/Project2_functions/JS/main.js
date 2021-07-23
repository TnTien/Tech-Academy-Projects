// This function will change the text and text color of the element with id="blueText"
function changeColor() {
    var str = "The text is now blue";
    var result = str.fontcolor("blue");
    document.getElementById("blueText").innerHTML = result;
} 

//This function will concatenate the string in the variable "sentence" with another sentence and then change the text with the id="concatenate"
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}