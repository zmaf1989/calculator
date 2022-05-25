/* DECORATOR

Create a "decorator" function called "keyList" that accepts an object as an argument. 
keyList will attach an array named "listOfKeys" to the object containing - you guessed 
it - all the keys on the object EXCEPT listOfKeys. */
const keyList = (obj) => {
  let listOfKeys = []
  if(typeof obj.listOfKeys != "undefined") {
    obj.listOfKeys = listOfKeys
    for(const key in obj) {
      listOfKeys.push(key)
    obj.listOfKeys = listOfKeys
    }
  }
}  

/*
  Don't modify the code below. Or else.
*/
window.sharedState.exercises.decorator = keyList