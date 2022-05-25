/*
  ITERATOR

  Create a function that accepts an array of numbers and an iterator. "doMathOnArray" will call the iterator on each number in the 
  array and store the result in the same location in the array (this means the original value will be overwritten).
*/
const doMathOnArray = (arr, iterator) => {
  for(i=0; i < arr.length; i++) {
    let value = arr[i]
    let arrUpdate = iterator(value)
    arr.splice(i, 1, arrUpdate)
  }
}

const filterNumbers = (arr, iterator) => {
  let newArray = []
  for(i=0; i < arr.length; i++) {
    let value = arr[i]
    if (iterator(value) === true) {
      newArray.push(value)
    }
  }
  return newArray  
}
/*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.iterator = doMathOnArray
window.sharedState.exercises.iteratorB = filterNumbers