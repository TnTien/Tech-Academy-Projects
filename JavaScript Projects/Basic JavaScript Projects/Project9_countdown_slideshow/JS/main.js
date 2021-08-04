var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Will loop through the images and display the current value n is on.
// Loop through dot and change color 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds; // Display timer and countdown
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!"); // Pop up window displaying message 
            clearTimeout(time); // Stops the Timeout, so timer doesn't continue to run
            timer.innerHTML = ""; // Clears the p element displaying timer
        }
    }
    tick();
}