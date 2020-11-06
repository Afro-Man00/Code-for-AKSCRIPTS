function isInt(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function earn() {
  input = prompt("What Would You Like To Set Your Cookie Balance To?");
  if(isInt(input)) {
  Game.cookies = parseInt(input);
  } else {
    alert("Invalid Input");
    earn();
  }
}
earn();
