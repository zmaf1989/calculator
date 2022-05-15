// Exercises are stored here. The 'null' values are filled in elsewhere.
const sharedState = {
  exercises: {
    callback: null,
    funreturn: null,
    closure: null,
    iterator: null,
    iteratorB: null,
    recursion: null,
    decorator: null
  },
  tests: {
    callback: null,
    funreturn: null,
    closure: null,
    iterator: null,
    iteratorB: null,
    recursion: null,
    decorator: null
  }
}

// We store references to UI elements here.
const elements = {
  callback: {
    output: document.getElementById('callback-exercise-output'),
    results: document.getElementById('callback-exercise-results'),
    testCase: document.getElementById('callback-exercise-test-case'),
    button: document.getElementById('callback-exercise-button')
  },
  funreturn: {
    output: document.getElementById('funreturn-exercise-output'),
    results: document.getElementById('funreturn-exercise-results'),
    testCase: document.getElementById('funreturn-exercise-test-case'),
    button: document.getElementById('funreturn-exercise-button')
  },
  closure: {
    output: document.getElementById('closure-exercise-output'),
    results: document.getElementById('closure-exercise-results'),
    testCase: document.getElementById('closure-exercise-test-case'),
    button: document.getElementById('closure-exercise-button')
  },
  iterator: {
    output: document.getElementById('iterator-exercise-output'),
    results: document.getElementById('iterator-exercise-results'),
    testCase: document.getElementById('iterator-exercise-test-case'),
    button: document.getElementById('iterator-exercise-button')
  },
  iteratorB: {
    output: document.getElementById('iteratorB-exercise-output'),
    results: document.getElementById('iteratorB-exercise-results'),
    testCase: document.getElementById('iteratorB-exercise-test-case'),
    button: document.getElementById('iteratorB-exercise-button')
  },
  recursion: {
    output: document.getElementById('recursion-exercise-output'),
    results: document.getElementById('recursion-exercise-results'),
    testCase: document.getElementById('recursion-exercise-test-case'),
    button: document.getElementById('recursion-exercise-button')
  },
  decorator: {
    output: document.getElementById('decorator-exercise-output'),
    results: document.getElementById('decorator-exercise-results'),
    testCase: document.getElementById('decorator-exercise-test-case'),
    button: document.getElementById('decorator-exercise-button')
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
      expected = 90
      result = doArithmetic(10, multiplyByThree, multiplyByThree)
      test(expected, result)
    } catch (e) {
      console.error(e)
      return setFailMessage('callback', e.message, testCase)
    }

    return setPassMessage('callback')
  },
  funreturn: () => {
    const plusFive = sharedState.exercises.funreturn
  
    let testCase
    let expected
    let result

    if (typeof plusFive !== 'function') {
      return setFailMessage('funreturn', 'plusFive isn\'t defined.')
    }

    try {
      testCase = 'typeof plusFive()'
      expected = 'function'
      result = typeof plusFive()
      test(expected, result)

      const addFive = plusFive()
      testCase = 'addFive(20)'
      expected = 25
      result = addFive(20)
      test(expected, result)
    } catch (e) {
      console.error(e)
      return setFailMessage('funreturn', e.message, testCase)
    }

    return setPassMessage('funreturn')
  },
  closure: () => {
    const equationBuilder = sharedState.exercises.closure
    const divideByTwo = num => num / 2
    const multiplyByThree = num => num * 3

    let testCase
    let expected
    let result
    let equation

    if (typeof equationBuilder !== 'function') {
      return setFailMessage('closure', 'equationBuilder isn\'t defined.')
    }

    try {
      testCase = 'typeof equationBuilder(multiplyByThree, multiplyByThree)'
      expected = 'function'
      result = typeof equationBuilder(multiplyByThree, multiplyByThree)
      test(expected, result, 'equationBuilder does not return a function')

      testCase = 'equationBuilder(multiplyByThree, multiplyByThree)\nequation(1)'
      expected = 9
      equation = equationBuilder(multiplyByThree, multiplyByThree)
      result = equation(1)
      test(expected, result)

      testCase = 'equationBuilder(divideByTwo, multiplyByThree)\nequation(10)'
      expected = 15
      equation = equationBuilder(divideByTwo, multiplyByThree)
      result = equation(10)
      test(expected, result)
    } catch (e) {
      console.error(e)
      return setFailMessage('closure', e.message, testCase)
    }

    return setPassMessage('closure')
  },
  iterator: () => {
    const doMathOnArray = sharedState.exercises.iterator
    const divideByTwo = num => num / 2
    const multiplyByThree = num => num * 3

    let testCase
    let expected
    let result
    let equation

    if (typeof doMathOnArray !== 'function') {
      return setFailMessage('closure', 'doMathOnArray isn\'t defined.')
    }

    try {
      let anArray = [4, 2, 6, 8, 1]

      testCase = 'result = doMathOnArray(anArray, multiplyByThree)'
      result = doMathOnArray(anArray, multiplyByThree)
      expected = undefined
      
      test(expected, result, `doMathOnArray should return nothing. Expected: ${undefined}. Actual: ${result}.`)

      anArray = [4, 2, 6, 8, 1]
      testCase = 'doMathOnArray(anArray, multiplyByThree)'
      doMathOnArray(anArray, multiplyByThree)
      result = anArray[1]
      expected = 6
      
      test(expected, result, `doMathOnArray does not give expected values: expected ${result} to be ${expected}`)

      anArray = [4, 2, 6, 8, 1]
      testCase = 'doMathOnArray(anArray, multiplyByThree)'
      doMathOnArray(anArray, multiplyByThree)
      result = anArray.length
      expected = 5
      
      test(expected, result, `doMathOnArray should not modify the array's length. Expected: ${expected}. Actual: ${result}`)
    } catch (e) {
      console.error(e)
      return setFailMessage('iterator', e.message, testCase)
    }

    return setPassMessage('iterator')
  },
  iteratorB: () => {
    const filterNumbers = sharedState.exercises.iteratorB
    const anArray = [4, 2, 6, 8, 1, 6]
    const isSix = (num) => {
      return num === 6
    }

    let testCase
    let expected
    let result

    if (typeof filterNumbers !== 'function') {
      return setFailMessage('closure', 'filterNumbers isn\'t defined.')
    }

    try {
      testCase = 'filterNumbers(anArray, isSix)'
      result = Array.isArray(filterNumbers(anArray, isSix))
      expected = true
      
      test(expected, result, `expected filterNumbers to return an array`)


      testCase = 'filterNumbers(anArray, isSix)'
      result = filterNumbers(anArray, isSix).length
      expected = 2
      
      test(expected, result, `expected filterNumbers to return an array of length 2. Got ${result} instead.`)

      testCase = 'filterNumbers(anArray, isSix)'
      filterNumbers(anArray, isSix)
      result = anArray.length
      expected = 6
      
      test(expected, result, `expected anArray to be unchanged. Expected length: ${expected}. Actual: ${result}.`)

      testCase = 'filterNumbers(anArray, isSix)'
      result = filterNumbers(anArray, isSix)[1]
      result = anArray[1]
      expected = 6
      
      test(expected, result, `filterNumbers does not give expected values: expected ${result} to be ${expected}`)
    } catch (e) {
      console.error(e)
      return setFailMessage('iteratorB', e.message, testCase)
    }

    return setPassMessage('iteratorB')
  },
  recursion: () => {
    const powerOf = sharedState.exercises.recursion

    if (typeof powerOf !== 'function') {
      return setFailMessage('recursion', 'powerOf isn\'t defined.')
    }

    try {
      testCase = 'powerOf(3, 5)'
      result = powerOf(3, 5)
      expected = 256
      
      test(expected, result, `powerOf does not give expected values: expected ${result} to be ${expected}`)
    } catch (e) {
      console.error(e)
      return setFailMessage('recursion', e.message, testCase)
    }

    return setPassMessage('recursion')
  },
  decorator: () => {
    const keyList = sharedState.exercises.decorator
    let testCase
    let result
    let expected

    if (typeof keyList !== 'function') {
      return setFailMessage('decorator', 'keyList isn\'t defined.')
    }

    try {
      let obj = {}
      testCase = 'keyList({})'
      keyList(obj)

      result = Array.isArray(obj.listOfKeys)
      expected = true
      test(expected, result, 'keyList should create an array on the key listOfKeys')

      obj = {}
      testCase = 'keyList({})'
      keyList(obj)

      result = obj.listOfKeys.length
      expected = 0
      test(expected, result, 'keyList should set an empty array when the object has no keys')

      obj = {
        name: 'Jerry',
        age: 25,
        occupation: 'Taxidermist'
      }

      testCase = `keyList({
        name: 'Jerry',
        age: 25,
        occupation: 'Taxidermist'
      })`

      keyList(obj)
      result = obj.listOfKeys.length
      expected = 3
      test(expected, result, 'expected an array of length three for listOfKeys')

      keyList(obj)
      result = obj.listOfKeys.length
      expected = 3
      test(expected, result, 'calling keyList more than once should not change the result')
    } catch (e) {
      console.error(e)
      return setFailMessage('decorator', e.message, testCase)
    }
  }
}

// Setup our listeners. These tests are run when the "test" button is clicked
const initializeListeners = () => {
  elements.callback.button.onclick = tests.callback
  elements.funreturn.button.onclick = tests.funreturn
  elements.closure.button.onclick = tests.closure
  elements.iterator.button.onclick = tests.iterator
  elements.iteratorB.button.onclick = tests.iteratorB
  elements.recursion.button.onclick = tests.recursion
  elements.decorator.button.onclick = tests.decorator
}

// Setup "shared state". These values are attached to the "window" object so
// they can be referenced in both "functions.js" AND "test.functions.js"
const initializeState = () => {
  window.sharedState = sharedState
}

initializeListeners()
initializeState()