var str = "What is the length of this string?"; // creates a variable with a string value
console.log(str.length); // displays the lenth of the string in the console

function Call_Loop() {
    var num = "";
    var X = 1;
    //While loop; loop will X is less than 11
    while (X < 11 ) {
        num += X + "<br>"; // will add X and line break to num
        X++; // add 1 to x
    }
    // will display result on HTML page
    document.getElementById("Loop").innerHTML = num;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Creates an array
var Content = ""; // Empty string 
var Y; // var to be used in the for loop
//Will loop through the array starting with the first position and then displaying it on the HTML page
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

var Verbs = ["running", "crying", "dancing", "singing", "eating"]; //Creates an array
var Sentence = ""; //Empty string
var i;
//Will loop through the array and assign to var Sentence and print to HTML
function array_Function() {
    for (i = 0; i < Verbs.length; i++) {
        Sentence += "He is " + Verbs[i] + ".<br>";
    }
    document.getElementById("Array").innerHTML = Sentence;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue"; //changes color to blue
    Musical_Instrument.price = "$900"; //creates new property with a value of $900
    //displays on HTML
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
        console.log(Musical_Instrument); //will display the array on the console
}

function practice() {
    //local
    var x = 5;
    document.write(x + "<br>");
        {
            let x = 10; //block
            document.write(x + "<br>");
        }
        document.write(x + "<br>");// x is equal to 5
    }

document.getElementById("return").innerHTML = returnFunction("Jack");
function returnFunction(name) {
    return "Hello " + name; //return statement
}

//created an object with a method
let pet = {
    animal: "dog",
    age: "2",
    breed: "corgi",
    description: function() {
        return "This pet is a " + this.age + " year old " + this.animal + " that is a " + this.breed;
    }
};
document.getElementById("petObject").innerHTML = pet.description();


// break statement
function breakStatement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) {break;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("breakStatement").innerHTML = text;
}

// continue statement
function continueStatement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) {continue;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continueStatement").innerHTML = text;
}