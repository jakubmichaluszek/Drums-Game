const drumsPlayButton=document.getElementById("drumsPlay");
const drumsGameContainer=document.querySelector(".drums__game");
const drumsGameClose=document.querySelector(".drums__game__close");
const drumsGameKeys= document.querySelector(".drums__game__keys");
const keys = document.querySelectorAll(".key");

drumsPlayButton.addEventListener("click", () =>{
    drumsGameContainer.style.width="70%";
    drumsGameContainer.style.height="70%";
    drumsGameClose.style.display="block";
    drumsGameKeys.style.display="flex"; 
    drumsGameKeys.classList.add("playing");//Allows to control when playing
});
drumsGameClose.addEventListener("click", () =>{
    drumsGameContainer.style.width="0";
    drumsGameContainer.style.height="0";
    drumsGameClose.style.display="none";
    drumsGameKeys.style.display="none";
    drumsGameKeys.classList.remove("playing");//Allows to control when playing
  
});
//Letting play by click on keyboard
window.addEventListener("keydown", function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;  //stoping function
    audio.currentTime=0;

    if(drumsGameKeys.classList.contains("playing")){ //if it contains, allow to play
        audio.play();
        key.classList.add("keyPlaying");
    }
    else{
        audio.currentTime=0;
        audio.pause();
    } 
});

//Letting play by click on mouse
keys.forEach(key => key.addEventListener("click", () => {
    const dataKey= key.getAttribute("data-key");
    const audio=document.querySelector(`audio[data-key="${dataKey}"]`);

    if(!audio) return;  //stoping function
    audio.currentTime=0;

    if(drumsGameKeys.classList.contains("playing")){ //if it contains, allow to play
        audio.play();
        key.classList.add("keyPlaying");
    }
    else{
        audio.currentTime=0;
        audio.pause();
    } 
}));

//Removing transition
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("keyPlaying");
}
keys.forEach(key => key.addEventListener("transitionend",removeTransition));



