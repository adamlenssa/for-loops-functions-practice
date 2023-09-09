// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  let allNumbers = [];
  let squared = [];
  let squareRoots = [];
  
  for(let i = 0; i <= max; i++) {
    allNumbers.push(i);
    let multiple = (i*i);
    if(multiple < max) {
        squared.push(multiple);
    }
}  
  for(let j = 0; j < squared.length; j++) {
    for (let maxNum of allNumbers) {
      if(maxNum === squared[j] ) {
        squareRoots.push(maxNum);
      }
    }
  }
  return squareRoots;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
