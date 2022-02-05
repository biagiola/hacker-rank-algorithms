function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let axisApples = []
  let axisOranges = []
  let houseApples = []
  let houseOranges = []

  apples.map(apple => {
    axisApples.push(apple+a)
  })

  oranges.map(orange => {
    axisOranges.push(orange+b)
  })

  for (let i = 0; i < apples.length; i++) {
    if (axisApples[i] >= s && axisApples[i]<= t) {
      houseApples.push(axisApples[i])
    }

    if (axisOranges[i] >= s && axisOranges[i]<= t) {
      houseOranges.push(axisOranges[i])
    }
  }

  console.log(houseApples.length)
  console.log(houseOranges.length)
}

countApplesAndOranges(7, 11, 5, 15, [3, 2], [-2, 2, 1])