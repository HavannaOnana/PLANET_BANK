// selecting the tag 
let Darkmode = document.querySelector(".icons #darkmode");

// selcting the html body
let HtmlBody = document.querySelector("body");

// select the a links cause it wasnt working
let ALinks = document.querySelectorAll("a");

// selecting the image 
let Logo = document.querySelector(".logo");

// made the darkmode false so i can switch it 
let IsDarkMode = false;

// selecting an image in the html
let PlanetBankImage= document.querySelector("#mainbody_img");

// selecting footer image
let FooterImage = document.querySelector(".footer_1");

//selecting the footer background
let Footer = document.querySelector("footer")

// add an event listener to it 
Darkmode.addEventListener("click" , function(){
  // this toggles the value of the boolean variable
  IsDarkMode = !IsDarkMode;

  if(IsDarkMode){
    Logo.setAttribute("src", "/images/dark mode-Photoroom.png-Photoroom.png");
    PlanetBankImage.setAttribute("src","/images/business woman.svg");
    HtmlBody.classList.add("darkmode");
    FooterImage.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
    Footer.style.backgroundColor="whitesmoke";
    Footer.style.color="#22092C";
    ALinks.forEach(element => {
        element.style.color = "white";
    });
  }
  else{
    HtmlBody.classList.remove("darkmode");
    Logo.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
    PlanetBankImage.setAttribute("src", "/images/business.svg")
    FooterImage.setAttribute("src","/images/dark mode-Photoroom.png-Photoroom.png");
    Footer.style.backgroundColor="#22092C";
    Footer.style.color="whitesmoke";
    ALinks.forEach(element => {
        element.style.color = "black";
    });
  }
  
})
