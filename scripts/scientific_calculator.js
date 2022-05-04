const state = {
  pemdas: {
    '*': [],
    '+': [],
    '/': [],
    '-': []
  },
  currentNumber: '',
  operator: null,
  display: '',
}

const operations = {
  '*': (num1, num2) => num1.value * num2.value,
  '+': (num1, num2) => num1.value + num2.value,
  '/': (num1, num2) => num1.value / num2.value,
  '-': (num1, num2) => num1.value - num2.value
}

class NumberValue {
  operators = []

  constructor (num) {
    this.value = num
  }
}

class Operator {
  constructor (symbol, ...values) {
    this.operation = operations[symbol]
    this.symbol = symbol
    this.values = values
    this.result = null

    this.values.forEach((value) => value.operators.push(this))
  }

  resolve = () => {
    const { values, operation } = this
    const result = operation(...values)
    const newValue = new NumberValue(result)

    let remainingOperators = []

    values.forEach(value => {
      const remaining = value.operators.filter(op => op !== this)

      remaining.forEach(op => {
        op.values = op.values.filter(val => val !== value)
        op.values.push(newValue)
      })

      remainingOperators.concat(remaining)
    })

    if (remainingOperators.length === 0) {
      this.result = newValue.value
    }

    newValue.operators = remainingOperators
  }
}

const addNumber = (num) => {
  state['currentNumber'] += num
  state['display'] += num
  updateScreen(state['display'])
}

const addSymbol = (str) => {
  if (state['currentNumber'] === '') {
    return
  }

  const num = parseFloat(state['currentNumber'])
  const numberValue = new NumberValue(num)
  const oldOperator = state['operator']

  if (oldOperator) {
    oldOperator.values.push(numberValue)
    numberValue.operators.push(oldOperator)

    state.pemdas[oldOperator.symbol].push(oldOperator)
  }

  const newOperator = new Operator(str, numberValue)

  state['operator'] = newOperator
  state['currentNumber'] = ''
  state['display'] += ` ${newOperator.symbol} `

  updateScreen(state['display'])
}

const solveEquation = (pemdas) => {
  let last

  pemdas['*'].forEach(op => {
    op.resolve()
    last = op
  })

  pemdas['/'].forEach(op => {
    op.resolve()
    last = op
  })

  pemdas['+'].forEach(op => {
    op.resolve()
    last = op
  })

  pemdas['-'].forEach(op => {
    op.resolve()
    last = op
  })

  if (last) {
    console.log(`Solution: ${last.result}`)
  }
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

/* Update this so that it also empties state. */
const clickListenerClear = () => {
  updateScreen()
}

const clickListenerDivide = () => {
  addSymbol('/')
}
const clickListenerMultiply = () => {
  addSymbol('*')
}
const clickListenerSubtract = () => {
  addSymbol('-')
}
const clickListenerAdd = () => {
  addSymbol('+')
}

const clickListenerEquals = () => {
  solveEquation(state.pemdas)
}

/* 
  Update this so that only one decimal can show up in either number.
  It will look similar to 'addNumber' with some additional logic.
*/
const clickListenerDecimal = () => {
  updateScreen('.')
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

// initializeListeners()