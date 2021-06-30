const menuButton = document.querySelector(".top__header__button");
const opened_menu=document.querySelector(".opened_menu");
const closeButton= document.querySelector(".closebtn");

menuButton.addEventListener("click", () =>{
    console.log("dziala");
    opened_menu.style.width="250px";

});
closeButton.addEventListener("click", () =>{
    console.log("x");
    opened_menu.style.width="0px";
});