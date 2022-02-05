function numberLineJumps(x1, v1, x2, v2) {
  let kangaroo1 = [x1]
  let kangaroo2 = [x2]
  let firstPosition = null
  
  for (let i = 1; i <= 10000; i++) {
    //console.log(i-1, kangaroo1[i-1]);
    //console.log(kangaroo1[i-1], kangaroo2[i-1]);
    kangaroo1.push(kangaroo1[i-1]+v1)
    kangaroo2.push(kangaroo2[i-1]+v2)
  }

  firstPosition = x1 < x2 ? 'x1' : 'x2'
  
  for (let i = 0; i <= 10000; i++) {
    for (let j = 0; j <= 10000; j++) {
      // begin from the second kangaroo
      if (kangaroo1[i] == kangaroo2[j]) {
        //console.log('yes');
        return 'yes'
      } 
    }    
  }
}

numberLineJumps(0, 2, 5, 3)
