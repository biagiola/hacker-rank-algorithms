'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(array) {
    // Write your code here
  let positive = 0
  let negative = 0
  let zero = 0

  array.map(x => {
    if(x<0) {
      // negative
      negative++
    } else if (x>0) {
      // positive
      positive++
    } else {
      // zero
      zero++
    }
  })

  let negativeStr = (negative/array.length).toString()
  let positiveStr = (positive/array.length).toString()
  let zeroStr = (zero/array.length).toString()

  /*console.log(negativeStr)
  console.log(positiveStr)
  console.log(zeroStr)*/
  
  let positiveResult = normalization(positiveStr)
  let negativeResult = normalization(negativeStr)
  let zeroResult = normalization(zeroStr)
  
  if(positive == array.length) {
      positiveResult = '1.000000'
  } 
  
  if(negative.length) {
      negativeResult = '0.000000'
  }
  
  if(zero.length) {
      zeroResult = '0.000000'
  }
  console.log(positiveResult)
  console.log(negativeResult)
  console.log(zeroResult)
}

const normalization = numberInSting => {
  //console.log(numberInSting.length > 8)
  let newNumberInString = ''

  if(numberInSting.length > 8) {
    for (let x = 0; x < 8; x++) {
      newNumberInString = newNumberInString.concat(numberInSting[x])
    }

    return newNumberInString

  } else if(numberInSting.length < 8) {
    newNumberInString = numberInSting
    for (let x = 0; x < 8; x++) {
      if(x < numberInSting.length) {
        // do nothing
      } else {
        newNumberInString = newNumberInString.concat('0')
      }
    }
    return newNumberInString

  } else {
    return numberInSting
  }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
