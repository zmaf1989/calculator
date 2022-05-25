/*
  CALLBACK

  Complete the function "doArithmetic" in functions.js. "doArithmetic" will accept
  a number as well as two "callback" functions. It will pass the number to the callback
  functions in order and return the result.
*/
const doArithmetic = (someNum, cb1, cb2) => {
 let result

 result = cb1(someNum)
 result = cb2(result)

 return result
}
  
  
 /*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.callback = doArithmetic