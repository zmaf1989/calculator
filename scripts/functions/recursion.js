const powerOf = (num, num2, x = 1) => {
    const multiplier = () => {
      let answer
      answer = Math.pow(num, x)
      return answer 
    }

  if (x === num2) {
    return multiplier()
  } else {
    return powerOf(num, num2, x + 1)
  }
}
window.sharedState.exercises.recursion = powerOf