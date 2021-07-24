function myDictionary() {
    // Created KVP called Animal
    var Animal = {
        Species: "Duck",
        Species: "Dog",
        Color: "Brown",
        Sound: "Quack"
    };
    delete Animal.Color; // Deletes key Color from Animal object
    document.getElementById("Dictionary").innerHTML = Animal.Color; // Displays the value of the Color key
}