/*
  CLOSURE

  Complete the function "equationBuilder" in closure.js. "equationBuilder" accepts two "arithmetic" 
  functions as arguments and returns a function that will apply them on a number when called.
*/
const equationBuilder = (cb1, cb2) => {
  const functionApplicator = (someNum) => {
    let result

    result = cb1(someNum)
    result = cb2(result)

    return result
  }
  return functionApplicator
}

/*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.closure = equationBuilder