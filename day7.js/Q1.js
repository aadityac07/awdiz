// write a js function tha ttakes an array of strings as input and returns a new array containing the length of those strings

function getLengths(strings) {
    var lengths = [];
    
    for (var i = 0; i < strings.length; i++) {
      lengths.push(strings[i].length);
    }
    
    return lengths;
  }
  
// var strings = ["awdiz", "Aaditya", "webdevelopmenmt", "it", "bsc"];
// var lengths = getLengths(strings);

// console.log(lengths); 

// var strings = ["india", "america", "russia", "china"];
// var lengths = getLengths(strings);

// console.log(lengths); 

// var strings = ["Ronaldo", "football", "boringgg", "abc", "2"];
// var lengths = getLengths(strings);

// console.log(lengths); 

var strings = ["all", "the", "best", "son"];
var lengths = getLengths(strings);

console.log(lengths); 


