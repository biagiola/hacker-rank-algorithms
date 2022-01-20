function aVeryBigSum(array) {
  let sum = 0
  array.map(x => {
    sum = sum + x
  })
  return sum
}

let result = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])

console.log(result)