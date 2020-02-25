
var drum1 = new Audio();
function Press(note){
  var path = "../"
  var snd = new Audio(path + note + ".wav");
  snd.play();
}

