/* 
  Whatever else we decide to do, our calculator will need to keep track
  of different values in order to work. For now, we'll keep track of them
  as "key"/"value" pairs this "state" object. We can referrence these values
  from the different functions we're eventually going to write.

  "state['someValueName'] = 10" etc.
*/
const state = {}

/*
  This function does one thing and one thing only: update the screen.
  It doesn't touch state. It doesn't read from any external value. All
  it does is accept a string and render it, because that's all it needs 
  to do.

  This point is worth dwelling on because it's a practice that will help
  us accomplish more in all sorts of different contexts. Think "work smarter
  not harder".

  Just to illustrate the point: At this point I have literally no idea how
  you're going to build out the rest of this progam, but by keeping "updateScreen"
  I don't need to.
*/
const updateScreen = (screenText = '') => {
  document.getElementById('screen').innerText = screenText
}

/*
  This function will set up all of the "event listeners" we'll need in order
  for the calculator to works. To reiterate: an "event" is some action a user
  performs (clicks, scrolling, mouse movement, keyboard use etc). 
  
  The "listeners" we're going to set up here will listen for a type of event,
  and when they detect it they'll call some sort of function we specify.

  To clarify, this will work in a series of steps:
  1. "Declare" the initializeListeners function. (this is literally what 
  we're doing in the function below).
  2. "Declare" a second, "listening" function. We'll call it clickListener.
  clickListener is what will get run when a click occurs.
  3. "Call" initializeListeners, which will actually run the function and attach
  the "listener" to the calculator buttons.
  4. Click the button, and see clickListener get "called".
*/

// 2.
const clickListener = () => {
  updateScreen('1')
}
const clickListener2 = () => {
  updateScreen('2')
}
const clickListener3 = () => {
  updateScreen('3')
}
const clickListener4 = () => {
  updateScreen('4')
}
const clickListener5 = () => {
  updateScreen('5')
}
const clickListener6 = () => {
  updateScreen('6')
}
const clickListener7 = () => {
  updateScreen('7')
}
const clickListener8 = () => {
  updateScreen('8')
}
const clickListener9 = () => {
  updateScreen('9')
}
const clickListener0 = () => {
  updateScreen('0')
}
// 1.
const initializeListeners = () => {
  const buttonOne = document.getElementById('button-one')
  const buttonTwo = document.getElementById('button-two')
  const buttonThree = document.getElementById('button-three')
  const buttonFour = document.getElementById('button-four')
  const buttonFive = document.getElementById('button-five')
  const buttonSix = document.getElementById('button-six')
  const buttonSeven = document.getElementById('button-seven')
  const buttonEight = document.getElementById('button-eight')
  const buttonNine = document.getElementById('button-nine')
  const buttonZero = document.getElementById('button-zero')
  const buttonAllClear = document.getElementById('button-clear')

  // listener is attached to "button-one"
  buttonOne.onclick = clickListener
  buttonTwo.onclick = clickListener2 
  buttonThree.onclick = clickListener3
  buttonFour.onclick = clickListener4
  buttonFive.onclick = clickListener5
  buttonSix.onclick = clickListener6
  buttonSeven.onclick = clickListener7
  buttonEight.onclick = clickListener8 
  buttonNine.onclick = clickListener9
  buttonZero.onclick = clickListener0
  buttonAllClear.onclick = updateScreen('')
}
// the buttonAllClear doesnt work for some reason.

// 3.
initializeListeners()