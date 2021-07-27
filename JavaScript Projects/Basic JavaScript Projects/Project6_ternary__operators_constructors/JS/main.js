//Ternary operator, will display the result depending on what the user entered.
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

function oldEnough() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age > 17) ? "You can vote!" : "You are not old enough to vote";
    document.getElementById("vote").innerHTML = canVote;
}
//Object constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Creates new instances of Vehicle class and assigned to a var
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    var str = prompt("Please choose Jack, Emily, or Erik");//Prompt user to choose among the 3 instances
    //Will display the result of what the user chose
    document.getElementById("Keywords_and_Constructors").innerHTML =
        str + " drives a " + window[str].Vehicle_Color + "-colored " + window[str].Vehicle_Model +
        " manufactured in " + window[str].Vehicle_Year;
}

//Object contstructor function
function Pet(Name, Age, Animal){
    this.Pet_Name = Name;
    this.Pet_Age = Age;
    this.Pet_Animal = Animal;
}

var A = new Pet("Corki", 5, "Dog")
var B = new Pet("Lucky", 9, "Cat")
var C = new Pet("Nemo", 1, "Fish")
var D = new Pet("Puck", 3, "Bird")

function clickHere() {
    var pick = prompt("Please enter A, B, C, or D")
    document.getElementById("New_and_This").innerHTML = 
    pick + " has a pet " + window[pick].Pet_Animal + " named " +
    window[pick].Pet_Name + " that is " + window[pick].Pet_Age + " years old.";
}

//Nested functions. Adds one, will display 10
function countFunction() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var startingPoint = 9;
        function plusOne() {startingPoint += 1;}
        plusOne();
        return startingPoint;
    }
}

//Nested functions
function nestedFunction() {
    document.getElementById("Nested_Functions").innerHTML = Add1();
    function Add1() {
        var start = 0;
        start += 1;
        return start;
    }
}

/*Reserved keyword, nothing will display.

var var = "variables";
document.write(var);

*/
