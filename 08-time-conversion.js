function timeConvertion(s) {
  let array = [
    ['13','01'],
    ['14','02'],
    ['15','03'],
    ['16','04'],
    ['17','05'],
    ['18','06'],
    ['19','07'],
    ['20','08'],
    ['21','09'],
    ['22','10'],
    ['23','11'],
    ['00','12']
  ]

  let meridiem = s.slice(s.length-2)
  let time = []

  //console.log(minuten/*,seconds*/)

  for (let x = 0; x < s.length; x++) {
    //console.log(array[x][0])
    if(s[x] == ':') {
      console.log('holi', x)
      if(x<3) {
        time[x] = s[x]
      }
    }   
  }
}

timeConvertion('12:01:00PM')