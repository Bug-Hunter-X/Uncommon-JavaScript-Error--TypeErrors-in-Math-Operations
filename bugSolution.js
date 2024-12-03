function myFunction(a, b) {
  // Check if both a and b are numbers using typeof
  if (typeof a !== 'number' || typeof b !== 'number') {
    // Handle the error appropriately (throw error, return default value, etc.)
    return 'Invalid input: Both parameters must be numbers';
  }
  return a + b;
}
console.log(myFunction(5, 3)); // Output: 8
console.log(myFunction('hello', 3)); //Output: Invalid input: Both parameters must be numbers
console.log(myFunction(5, 'world')); //Output: Invalid input: Both parameters must be numbers