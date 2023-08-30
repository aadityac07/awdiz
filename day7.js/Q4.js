// write a js function that takes two array of number  as input and returns a new array  containing elements that are present in both arrays

function findCommonElements(arr1, arr2) {
    // Create an empty array to store common elements
    let commonElements = [];
  
    
    for (let i = 0; i < arr1.length; i++) {
     
      if (arr2.includes(arr1[i])) {
        
        commonElements.push(arr1[i]);
      }
    }
  
    // Return the new array with common elements
    return commonElements;
  }
  
  // Example 
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [4, 5, 6, 7, 8];
//   const result = findCommonElements(array1, array2);
//   console.log(result); 
  
// const array1 = [1, 2, 35666, 4, 5];
//   const array2 = [35666, 5, 6, 7, 8];
//   const result = findCommonElements(array1, array2);
//   console.log(result); 
  
// const array1 = [10000, 2215488, 3, 478787, 574748];
//   const array2 = [3, 589899, 478787, 708766, 874747];
//   const result = findCommonElements(array1, array2);
//   console.log(result); 

const array1 = [60, 80, 70, 40, 50];
  const array2 = [40, 50, 60, 70, 80];
  const result = findCommonElements(array1, array2);
  console.log(result); 
  