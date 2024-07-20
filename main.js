//Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge

// function printArray(number) {
//     var newArray = [];
  
//     for(var i = 1; i <= number;) {
//       newArray.push(i);
//     }
  
//     return newArray;
//   }



function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));