window.addEventListener('keypress', playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition (e){
  this.classList.remove("playing");
}


function playSound (e){
  let audio = document.getElementById((e.key).toLowerCase());
  
  let key = document.querySelector(`.${(e.key).toLowerCase()}`);
  if(!audio){
    return;
  }
  audio.currentTime = 0;  
  audio.play();
  key.classList.add("playing");
}
