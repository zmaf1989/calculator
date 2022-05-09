/*
  FUNCTIONS RETURNING FUNCTIONS

  Complete the function "plusFive" in functions.js. When called, "plusFive" 
  will return a function that adds five to any number passed as an argument.
*/
const plusFive = (num) => {
 const addFive = (someNum) => {
  return someNum + 5
 }
 return addFive
 }
var additionOfFive = plusFive()
var result = additionOfFive(10)

console.log(result)

/*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.funreturn = plusFive