const sharedState = {
  exercises: {
    callbacks: null
  }
}

const elements = {
  callback: {
    output: document.getElementById('callback-exercise-output'),
    results: document.getElementById('callback-exercise-results'),
    button: document.getElementById('callback-exercise-button')
  }
}

const setFailMessage = (name, message) => {
  exercise = elements[name]

  exercise.results.classList.add('code-results-fail')
  exercise.output.innerText = message
}

const setPassMessage = (name, message) => {
  exercise = elements[name]

  exercise.results.classList.add('code-results-pass')
  exercise.output.innerText = message
}

const testCallbackExercise = () => {
  console.log(sharedState)
  setFailMessage('callback', 'Potato Salad')
}

const initializeListeners = () => {
  elements.callback.button.onclick = testCallbackExercise
}

const initializeState = () => {
  window.sharedState = sharedState
}

initializeListeners()
initializeState()