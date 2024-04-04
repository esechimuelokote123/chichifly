document.addEventListener('DOMContentLoaded',()=>{
                          constbuttons=
                          document.querySelectorAll('.beat-btn');
buttons.forEach(button=>{
                button.addEventListener('clik',()=>
                                        playSound(button.getAttribute('data-sound')));
});
});

functionplaySound(soundFile){
  constaudio=newAudio(sounds/${soundFile});audio.play();
}
                          
