function grading(grades) {
  let result = []

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 37) {
      result.push(grades[i])
    } else {
      // next multiple 5
      let reminder = 5 - grades[i]%5
      let nextMultipleFive = grades[i] + reminder
  
      console.log(grades[i], reminder, nextMultipleFive);
  
      if(nextMultipleFive - grades[i] < 3) {
        // make roundup
        result.push(nextMultipleFive)
      } else {
        result.push(grades[i])
      } 
    }
  }
  
  return result
}

//let result = grading([41,42,43,44,45])
let result = grading([4,73,67,38,33])
console.log(result)