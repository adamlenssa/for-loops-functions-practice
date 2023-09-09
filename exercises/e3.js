
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  let sum = 0;
  let arrays = array;
  for (let i = 0; i < arrays.length; i++) {
    let number = arrays[i];
    sum+=number
  }
  return (sum/arrays.length);
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  let numbers = [];
  let onlyNumbers = [];
  let together = 0;
  for (let i = 0; i < str.length; i++) {
    let element = Number(str[i]);
    if (element > 0 ) {
      onlyNumbers.push (element)
    }
  }
  for (let j = 0; j < onlyNumbers.length; j++) {
    let integers = onlyNumbers[j];
    together += integers;
  }
  return together
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
