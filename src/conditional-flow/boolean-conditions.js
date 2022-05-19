// This function should accept a boolean value and return the string
// "Well done, you passed!" if the value is true, or "Sorry, try again"
// if the value is false.

let didPass = true;
function getResult (didPass) {
  // TODO: write code in this function body to pass the tests
  if (didPass) {
    console.log("Well done, you passed!")
     
   } else {
    console.log("Sorry, try again")
   }
}


module.exports = {
  a: getResult
}
