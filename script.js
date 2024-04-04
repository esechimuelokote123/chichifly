document.addEventListener('DOMContentLoaded',()=>{
                          const buttons=
                        document.querySelectorAll('.beat-btn');
buttons.forEach(button=>{
                button.addEventListener('clik',()=>
                                        playSound(button.getAttribute('data-sound')));
});
});

function playSound(soundFile){
  const audio=newAudio(`sounds/${soundFile`});audio.play();
}
                          
