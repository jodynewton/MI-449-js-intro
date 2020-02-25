

function Press(note){
  var drum1 = new Audio();
  var path = "../";
  var snd = new Audio(path + note + ".wav");
  return snd.play();
}
Press();

