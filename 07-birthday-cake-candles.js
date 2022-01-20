function birthdayCakeCandles(arr) {
  let max = arr[0];
  //console.log(max)
  
  // find the max
  for (let x = 0; x < arr.length; x++) {
    if(max < arr[x]) {
      max = arr[x]
    }
  }

  // count max number
  let counter = 0
  for (let x = 0; x < arr.length; x++) {
    if(max == arr[x]) {
      counter++
    }
  }

  return counter
}

birthdayCakeCandles([4,4,1,3])