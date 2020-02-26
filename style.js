//Drum Kick sound
var audio_kick = document.getElementById('audio-kick')
var btnKick = document.getElementById('button-kick')
btnKick.addEventListener('click', function ()
{
    console.log('first');
    audio_hat.pause();
    audio_clap.pause();
    audio_kick.play();
});
btnKick.addEventListener('mouseenter', function () 
{
  console.log('I was clicked!');
  audio_hat.pause();
  audio_clap.pause();
  audio_kick.play();
});

// Drum clap sound
var btnClap = document.getElementById('button-clap');
btnClap.addEventListener('click', function ()
{
  console.log('first'); 
  audio_hat.pause();
  audio_kick.pause();
  audio_clap.play();
});
btnClap.addEventListener('mouseenter', function () {
  console.log('I was clicked!');
  audio_hat.pause();
  audio_kick.pause();
  audio_clap.play();
});

// Drum Hihat Sound
var btnHat = document.getElementById('button-hihat');

btnHat.addEventListener('click', function ()
{
  console.log('first');
  audio_kick.pause();
  audio_clap.pause();
  audio_hat.play()
});
btnHat.addEventListener('mouseenter', function ()
{
  console.log('I was clicked!');
  audio_kick.pause();
  audio_clap.pause();
  audio_hat.play();
});
