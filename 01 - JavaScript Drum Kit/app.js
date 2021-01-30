
window.addEventListener('keypress', playSound); //Stars function "playSound" when key gets pressed

function removeTransition (e){
  this.classList.remove("playing");
}

function addClassPlaying (className){
  className.classList.add("playing");
}

function playSound (e){ //Plays Sound, Adds "playing" to corresponding div key, and removes it after transition

  let audio = document.getElementById((e.key).toLowerCase());
  let key = document.querySelector(`.${(e.key).toLowerCase()}`); //Selects key's corresponding div

  if(!audio) //Condition to finish function if there's no div to the key pressed
  return ;

  audio.currentTime = 0; //Everytime a key gets pressed the audio goes back to 0 time.
  audio.play(); 

  addClassPlaying(key);
  key.addEventListener('transitionend', removeTransition);
}
