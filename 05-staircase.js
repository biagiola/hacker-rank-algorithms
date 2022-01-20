function stairCase(n) {
  let line = ''
  let lines = []
  let blanks = n-1
  let asterisks = 0

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if(x + y < blanks) {
        line = line.concat(' ') 
      } else {
        line = line.concat('#') 
      }
    }
    lines.push(line)

    asterisks++
    line = ''
    
    //console.log('line',line) 
  }
  

  lines.forEach( x => {
    console.log(x)
  })
}

stairCase(2)
