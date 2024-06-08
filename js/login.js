// selecting the tag 
let Darkmode = document.querySelector(".icons #darkmode");

// selcting the html body
let HtmlBody = document.querySelector("body");

// select the a links cause it wasnt working
let ALinks = document.querySelectorAll("a");

// selecting the image 
let Logo = document.querySelector(".logo");

// selecting the image in the form
let FormImage = document.querySelector(".form img");


// made the darkmode false so i can switch it 
let IsDarkMode = false;

// selecting footer image
let FooterImage = document.querySelector(".footer_1");

//selecting the footer background
let Footer = document.querySelector("footer");

// add an event listener to it 
Darkmode.addEventListener("click" , function(){
    // this toggles the value of the boolean variable
    IsDarkMode = !IsDarkMode;
  
    if(IsDarkMode){
      Logo.setAttribute("src", "/images/dark mode-Photoroom.png-Photoroom.png");
      HtmlBody.classList.add("darkmode");
      FormImage.setAttribute("src","/images/dark mode-Photoroom.png-Photoroom.png")
      ALinks.forEach(element => {
          element.style.color = "white";
      });
    }
    else{
      HtmlBody.classList.remove("darkmode");
      Logo.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
      FormImage.setAttribute("src","/images/1-Photoroom.png-Photoroom.png")
      ALinks.forEach(element => {
          element.style.color = "black";
      });
    }
    
})

//selecting the button
let Button = document.querySelector("button");

// adding the username 
let Username = document.querySelector('input[name = "username"]');

//selecting the password 
let Password = document.querySelector('input[name = "password"]');

//selecting login check to output whether you logged in sucessfully
let LoginCheck = document.querySelector("logincheck");
  
//adding an eventlistner to button
Button.addEventListener("click",function(){
    
})