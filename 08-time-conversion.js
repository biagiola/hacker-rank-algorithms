function timeConvertion(s) {
  let hour =  s.slice(0,2)
  let minutes = s.slice(3,5)
  let seconds = s.slice(6,8)
  let meridiem = s.slice(8,10)
  let timeMilitaryFormat = ''
  // 01 2 34 5 67 89
  // 12 : 00 : 00 PM
  if(meridiem == 'PM' && hour != '12') {
    return timeMilitaryFormat = `${parseInt(hour)+12}:${minutes}:${seconds}`
  } else if(meridiem == 'PM' && hour == '12') {
    return timeMilitaryFormat = `12:${minutes}:${seconds}`
  } else if(meridiem == 'AM' && hour == '12') {
    return timeMilitaryFormat = `00:${minutes}:${seconds}`
  } 
  else {
    timeMilitaryFormat = s.slice(0,8)
    return timeMilitaryFormat
  }
}

let result = timeConvertion('12:01:00AM')

console.log(result)