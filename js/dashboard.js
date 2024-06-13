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

//adding event listener 
Darkmode.addEventListener("click",function(){
    IsDarkMode = !IsDarkMode

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