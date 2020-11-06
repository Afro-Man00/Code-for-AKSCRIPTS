function isInt(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function earn() {
  input = prompt("How Many Cookies Would You Like To Add?");
  if(isInt(input)) {
  Game.Earn(parseInt(input));
  } else {
    alert("Invalid Input");
    earn();
  }
}
earn();
