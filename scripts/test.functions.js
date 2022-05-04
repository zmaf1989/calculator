// Exercises are stored here. The 'null' values are filled in elsewhere.
const sharedState = {
  exercises: {
    callback: null
  }
}

// We store references to UI elements here.
const elements = {
  callback: {
    output: document.getElementById('callback-exercise-output'),
    results: document.getElementById('callback-exercise-results'),
    testCase: document.getElementById('callback-exercise-test-case'),
    button: document.getElementById('callback-exercise-button')
  }
}

// Displays results when an exercise fails
const setFailMessage = (name, message, testCase = '') => {
  exercise = elements[name]

  exercise.results.classList.add('code-results-fail')
  exercise.results.classList.remove('code-results-pass')
  exercise.output.innerText = message
  exercise.testCase.innerText = testCase
}

// Displays results when an exercise passes
const setPassMessage = (name, message = 'Success!') => {
  exercise = elements[name]

  exercise.results.classList.add('code-results-pass')
  exercise.results.classList.remove('code-results-fail')
  exercise.output.innerText = message
  exercise.testCase.innerText = ''
}

const test = (expected, result, message) => {
  if (expected !== result) {
    message = message ? message : `expected result: ${expected}\n actual result: ${result}`

    throw new Error(message)
  }
}

const tests = {
  callback: () => {
    const doArithmetic = sharedState.exercises.callback
    const divideByTwo = num => num / 2
    const multiplyByThree = num => num * 3

    let testCase
    let expected
    let result

    if (typeof doArithmetic !== 'function') {
      return setFailMessage('callback', 'doArithmetic isn\'t defined.')
    }

    try {
      testCase = 'doArithmetic(6, divideByTwo, multiplyByThree)'
      expected = 9
      result = doArithmetic(6, divideByTwo, multiplyByThree)
      test(expected, result)

      testCase = 'doArithmetic(15, divideByTwo, multiplyByThree)'
      expected = 22.5
      result = doArithmetic(15, divideByTwo, multiplyByThree)
      test(expected, result)

      testCase = 'doArithmetic(10, multiplyByThree, multiplyByThree)'
      expected = 300
      result = doArithmetic(10, multiplyByThree, multiplyByThree)
      test(expected, result)
    } catch (e) {
      console.error(e)
      return setFailMessage('callback', e.message, testCase)
    }

    return setPassMessage('callback')
  }
}

// Setup our listeners. These tests are run when the "test" button is clicked
const initializeListeners = () => {
  elements.callback.button.onclick = tests.callback
}

// Setup "shared state". These values are attached to the "window" object so
// they can be referenced in both "functions.js" AND "test.functions.js"
const initializeState = () => {
  window.sharedState = sharedState
}

initializeListeners()
initializeState()