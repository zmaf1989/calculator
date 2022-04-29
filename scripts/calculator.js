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