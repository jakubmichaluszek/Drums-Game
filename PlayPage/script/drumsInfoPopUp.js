const drumsInfoButton=document.getElementById("info2");
const drumsInfoContainer=document.querySelector(".drums__game__information");
const drumsInfoClose=document.querySelector(".drums__information__close");

drumsInfoButton.addEventListener("click", () =>{
    drumsInfoContainer.style.width="70%";
    drumsInfoContainer.style.height="70%";
   
    drumsInfoClose.style.display="block";

});

drumsInfoClose.addEventListener("click", () =>{
            drumsInfoContainer.style.width="0px";
            drumsInfoContainer.style.height="0px";
           
            drumsInfoClose.style.display="none";
});