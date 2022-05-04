/* 
  Whatever else we decide to do, our calculator will need to keep track
  of different values in order to work. For now, we'll keep track of them
  as "key"/"value" pairs this "state" object. We can referrence these values
  from the different functions we're eventually going to write.

  "state['someValueName'] = 10" etc.
*/
const state = {
  firstNumber: '',
  operator: '',
  secondNumber: ''
}

const addNumber = (num) => {
  // currentStep determines if we're updating the first or second number.
  let currentStep

  // if the 'operator' has been set we know we're dealing with the second number
  if (state['operator'] === '') {
    currentStep = 'firstNumber'
  } else {
    currentStep = 'secondNumber'
  } 

  state[currentStep] += num
  updateScreen(state[currentStep])
}

const addDecimal = () => {
  let currentStep

  if (state['operator'] === '') {
    currentStep = 'firstNumber'
  } else {
    currentStep = 'secondNumber'
  } 

  if (state[currentStep].indexOf('.') == -1) {
    (state[currentStep]) += ('.')
  }  
  updateScreen(state[currentStep])
}

const updateScreen = (screenText = '') => {
  document.getElementById('screen').innerText = screenText;
}

const clickListener = () => {
  addNumber('1')
}
const clickListener2 = () => {
  addNumber('2')
}
const clickListener3 = () => {
  addNumber('3')
}
const clickListener4 = () => {
  addNumber('4')
}
const clickListener5 = () => {
  addNumber('5')
}
const clickListener6 = () => {
  addNumber('6')
}
const clickListener7 = () => {
  addNumber('7')
}
const clickListener8 = () => {
  addNumber('8')
}
const clickListener9 = () => {
  addNumber('9')
}
const clickListener0 = () => {
  addNumber('0')
}
const clickListenerClear = () => {
  updateScreen()
  for (let key in state) {
    state[key] = ''
  }
}

const clickListenerDivide = () => {
  if (state['operator'] === '') {
    updateScreen('/')
    state['operator'] = '/'
  }
}
const clickListenerMultiply = () => {
  if (state['operator'] === '') {
  updateScreen('*')
  state['operator'] = '*'
  }
}
const clickListenerSubtract = () => {
  if (state['operator'] === '') {
  updateScreen('-')
  state['operator'] = '-'
  }
}
const clickListenerAdd = () => {
  if (state['operator'] === '') {
  updateScreen('+')
  state['operator'] ='+'
  }
}

/* 
  Update this so that only one decimal can show up in either number.
  It will look similar to 'addNumber' with some additional logic.
*/
const clickListenerDecimal = () => {
  addDecimal()
}

const clickListenerEquals = () => {
  let equate
  
  if (state['secondNumber'] != '' && state['operator'] === '/') {
    equate = state['firstNumber'] % state['secondNumber']
  } else if (state['secondNumber'] != '' && state['operator'] === '*') {
    equate = state['firstNumber'] * state['secondNumber']
  } else if (state['secondNumber'] != '' && state['operator'] === '-') {
    equate = state['firstNumber'] - state['secondNumber']
  } else if (state['secondNumber'] != '' && state['operator'] === '+') {
    equate = state['firstNumber'] + state['secondNumber']
  }
  updateScreen(equate)
  for (let key in state) {
    state[key] = ''
  }

}

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
  const buttonDivide = document.getElementById('button-divide')
  const buttonMultiply = document.getElementById('button-multiply')
  const buttonSubtract = document.getElementById('button-subtract')
  const buttonAdd = document.getElementById('button-add')
  const buttonDecimal = document.getElementById('button-decimal')
  const buttonEquals = document.getElementById('button-equals')

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
  buttonAllClear.onclick = clickListenerClear
  buttonDivide.onclick = clickListenerDivide
  buttonMultiply.onclick = clickListenerMultiply
  buttonSubtract.onclick = clickListenerSubtract
  buttonAdd.onclick = clickListenerAdd
  buttonDecimal.onclick = clickListenerDecimal
  buttonEquals.onclick = clickListenerEquals
}

initializeListeners()