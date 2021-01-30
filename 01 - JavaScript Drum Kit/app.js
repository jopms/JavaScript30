window.addEventListener('keypress', playSound);

function playSound (e){
  let audio = document.getElementById((e.key).toLowerCase());
  audio.currentTime = 0;  
  audio.play();
}