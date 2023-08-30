// write a js function that takes an array of numbers as input and returns the smallest number from the array

function findSmallestNumber(numbers) {
    
    let smallestNumber = numbers[0];
  
    
    for (let i = 1; i < numbers.length; i++) {
     
      if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
      }
    }
  
    // Return the smallestNumber
    return smallestNumber;
  }
//   const numbers = [5, 2, 8, 1, 9];

// console.log(findSmallestNumber(numbers)); 

// const numbers = [25, 299, 890788, 1000, 7];

// console.log(findSmallestNumber(numbers)); 

// 
const numbers = [0.5, 0.42, 88999, -0.1, 23];

console.log(findSmallestNumber(numbers)); 

