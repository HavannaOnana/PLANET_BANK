// selecting the tag 
let Darkmode = document.querySelector(".icons #darkmode");

// selcting the html body
let HtmlBody = document.querySelector("body");

// select the a links cause it wasnt working
let ALinks = document.querySelectorAll("a");

// selecting the image 
let Logo = document.querySelector(".logo");

// selecting the image in the form
let BodyImage = document.querySelector(".login_body img");


// made the darkmode false so i can switch it 
let IsDarkMode = false;

// selecting footer image
let FooterImage = document.querySelector(".footer_1");

//selecting the footer background
let Footer = document.querySelector("footer");

//selecting the button
let Button = document.querySelector("button");

//selecting the button

// add an event listener to it 
Darkmode.addEventListener("click" , function(){
    // this toggles the value of the boolean variable
    IsDarkMode = !IsDarkMode;
  
    if(IsDarkMode){
      Logo.setAttribute("src", "/images/dark mode-Photoroom.png-Photoroom.png");
      HtmlBody.classList.add("darkmode");
      BodyImage.setAttribute("src" ,"/images/loginimages_dark.svg");
      FooterImage.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
      Button.style.backgroundColor= "orangered5752"
    Footer.style.backgroundColor="whitesmoke";
    Footer.style.color="#22092C";
      ALinks.forEach(element => {
          element.style.color = "white";
      });
    }
    else{
      HtmlBody.classList.remove("darkmode");
      Logo.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
      BodyImage.setAttribute("src" ,"/images/loginimages.svg");
      Footer.style.backgroundColor="#22092C";
      Footer.style.color="whitesmoke";
      FooterImage.setAttribute("src","/images/dark mode-Photoroom.png-Photoroom.png");
      ALinks.forEach(element => {
          element.style.color = "black";
      });
    }
    
})


// adding the username 
let  UsernameInput = document.querySelector('input[name = "username"]');

//selecting the password 
let PasswordInput = document.querySelector('input[name = "password"]');


//selecting login check to output whether you logged in sucessfully
let LoginCheck = document.querySelector(".logincheck");
  
//adding an eventlistner to button
Button.addEventListener("click",function(){
    //getting the values of the username and password
    let Username = UsernameInput.value;
    let Password = PasswordInput.value;
    // checking if the password and username is correct 
    if(Username === "godrine" && Password === "12345"){
       location.href = "/html/dashboard.html";
       console.log("Sucess");
    }
    else{
        LoginCheck.textContent = "Login Details Incorrect";
        console.log("fail");
        
        //refreshing the page 
        setTimeout(function(){
            location.reload();
        },2000)
    }
})