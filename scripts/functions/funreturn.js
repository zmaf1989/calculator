/*
  FUNCTIONS RETURNING FUNCTIONS

  Complete the function "plusFive" in functions.js. When called, "plusFive" 
  will return a function that adds five to any number passed as an argument.
*/
const plusFive = () => {
 const addFive = (someNum) => {
  return someNum + 5
 }
  return addFive
}

/*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.funreturn = plusFive