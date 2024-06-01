// selecting the tag 
let Darkmode = document.querySelector(".icons #darkmode");

// selcting the html body
let HtmlBody = document.querySelector("body");

// select the a links cause it wasnt working
let ALinks = document.querySelectorAll("a");

// selecting the image 
let Logo = document.querySelector(".logo");

let IsDarkMode = false;

// add an event listener to it 
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