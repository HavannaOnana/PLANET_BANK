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

//selecting savings account node
let SavingsAccount = document.querySelector(".saving_account");

// selecting the last part fonts
let Expenses = document.querySelector(".expenses");

//selecting transactions 
let Transactions = document.querySelector(".transactions");

//selecting the footer background
let Footer = document.querySelector("footer");

// selecting footer image
let FooterImage = document.querySelector(".footer_1");

//adding event listener 
Darkmode.addEventListener("click",function(){
    IsDarkMode = !IsDarkMode

    if(IsDarkMode){
        Logo.setAttribute("src", "/images/dark mode-Photoroom.png-Photoroom.png");
        HtmlBody.classList.add("darkmode");
        ALinks.forEach(element => {
            element.style.color = "white";
        });
        SavingsAccount.style.color ="black";
        Expenses.style.color = "gold"
        Transactions.style.color="black";
        Footer.style.backgroundColor="whitesmoke";
        Footer.style.color = "#22092C";
        FooterImage.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
    }
    else{
        HtmlBody.classList.remove("darkmode");
        Logo.setAttribute("src", "/images/1-Photoroom.png-Photoroom.png");
        ALinks.forEach(element => {
            element.style.color = "black";
        });
        Expenses.style.color = "white"
        Footer.style.backgroundColor="#22092C";
    Footer.style.color="whitesmoke";
    FooterImage.setAttribute("src","/images/dark mode-Photoroom.png-Photoroom.png");
    }
})