/* DECORATOR

Create a "decorator" function called "keyList" that accepts an object as an argument. 
keyList will attach an array named "listOfKeys" to the object containing - you guessed 
it - all the keys on the object EXCEPT listOfKeys. */
const keyList = (obj) => {
  let newArray = []
  for(const prop in obj) {
    newArray.push(prop)
    if ('listOfKeys' in obj) {
      delete obj.listOfKeys
    }
  }
  obj.listOfKeys = newArray
  console.log(newArray)
}
  

/*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.decorator = keyList