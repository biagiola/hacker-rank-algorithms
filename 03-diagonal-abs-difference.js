function diagonalDifference(dim, array) {
  let sumD1 = 0
  let sumD2 = 0

  let rowD2 = 0
  let colD2 = dim - 1

  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      // D1
      if(x == y) {
        //console.log(array[x][y])
        sumD1 = sumD1 + array[x][y]
      }

      if(x == rowD2 && y == colD2) {
        rowD2++
        colD2--
        sumD2 = sumD2 + array[x][y]
      }
      // D2
    }
  }

  return Math.abs(sumD1-sumD2)
  
}

let result = diagonalDifference(3, [[11,2,4], [4,5,6], [10,8,-12]])
console.log(result)