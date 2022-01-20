function minMaxSum(arr) {

  let sortedDesc = [...arr.sort(function(a, b){return b - a})];
  let sortedAsc  = [...arr.sort(function(a, b){return a - b})];
  
  let sumMax = 0
  let sumMin = 0

  for (let x = 0; x < 4; x++) {
    sumMax = sumMax + sortedDesc[x]
  }

  for (let x = 0; x < 4; x++) {
    sumMin = sumMin + sortedAsc[x]
  }

  return sumMax, sumMin
}

minMaxSum([1,2,3,4,5])
