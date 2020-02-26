
var audio_kick = document.getElementById('audio-kick')
var btnKick = document.getElementById('button-kick').addEventListener('click', function Player(){console.log('first'); audio_kick.play()});
btnKick.addEventListener('mouseenter', function Player(){console.log('event 2'); audio_kick.play()});
var btnClap = document.getElementById('button-clap');
var btnHat = document.getElementById('button-hihat');

// btnKick.addEventListener('mouseenter', Press(note));


function Player(event){
  if(event.Play()){
    console.log("made it into Player function if statement")
    return 0;
  }
  else{
    console.log('Else Statement')
    event.Play();
    return 0;
  }

}



