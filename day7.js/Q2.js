// write a js function that takes an array of number  as input and returns a new array with the only even numbers from the orignal array

function getEvenNumbers(numbersArray) {
    // Create an empty array to store the even numbers
    var evenNumbers = [];
  
    
    for (var i = 0; i < numbersArray.length; i++) {
      
      if (numbersArray[i] % 2 === 0) {
        // If it is even, add it to the evenNumbers array
        evenNumbers.push(numbersArray[i]);
      }
    }
  
    // Return the new array with only the even numbers
    return evenNumbers;
  }
  
//   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// var evenNumbers = getEvenNumbers(numbers);
// console.log(evenNumbers);

// 
// var numbers = [1, 22, 13, 44, 5, 26, 77, 88, 9, 200, 111, 35];
// var evenNumbers = getEvenNumbers(numbers);
// console.log(evenNumbers);


var numbers = [1, 22, 24];
var evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);

