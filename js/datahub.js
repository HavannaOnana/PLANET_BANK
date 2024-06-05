// selecting the body 
let HtmlBody = document.querySelector("body");

// selecting the image 
let Logo = document.querySelector(".logo");

// selecting the tag 
let Darkmode = document.querySelector(".icons #darkmode");

// select the a links cause it wasnt working
let ALinks = document.querySelectorAll("a");

// made the darkmode false so i can switch it 
let IsDarkMode = false;


//adding an event listener 
Darkmode.addEventListener("click" , function(){
    // this toggles the value of the boolean variable
    IsDarkMode = !IsDarkMode;

   if(IsDarkMode){
    Logo.setAttribute("src", "/images/dark mode-Photoroom.png-Photoroom.png");
    HtmlBody.classList.add("darkmode");
    ALinks.forEach(element => {
        element.style.color = "white";
    });
   }
   else{
    HtmlBody.classList.remove("darkmode");
    Logo.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
    ALinks.forEach(element => {
        element.style.color = "black";
    });
   }

})

// Animation for the progress bars
function ShowingProgress() {
    document.addEventListener("DOMContentLoaded", function() {
        var insideLines = document.querySelectorAll(".inside_line");
        insideLines.forEach(function(insideLine) {
            var targetWidth = insideLine.getAttribute("data-progress");
            // Animation for the progress bar
            setTimeout(function() {
                insideLine.style.width = targetWidth + '%';
                insideLine.querySelector('span').textContent = targetWidth + '%';
            }, 100); // Delay to ensure the animation runs
        });
    });
}

// showing progress
ShowingProgress();