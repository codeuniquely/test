// ================================================================
// name:
//   getLastPartOfArray
//
// description:
//   Returns the last element in an array
//   or undefined if there are no elements
//
//   this is a Utility method, used by various test cases to test
//   the functon `groupArrayElements`. it is not used by the
//   function itself.
//
// how it works:
//   Clones the array (so there is no mutation) - using slice(0),
//   https://davidwalsh.name/javascript-clone-array
//
//   then returns the last element in the array using pop().
//   https://www.w3schools.com/jsref/jsref_pop.asp
// ================================================================
export const getLastPartOfArray = (arr) => arr.slice(0).pop();
