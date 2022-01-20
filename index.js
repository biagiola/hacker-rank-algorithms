let array = [1,2,3,4,10,11]

function main(arg) {
  let total = 0;
  
  for (let index = 0; index < arg.length; index++) {
    //const element = array[index];
    total = total + arg[index]
  }

  console.log('total',total );
  return total 

}

main(array)