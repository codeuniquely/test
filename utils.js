// ================================================================
// Returns the last element in an array or undefined if there are
// no elements.
// This is a Utility method, used by various test cases to test
// the functon `groupArrayElements`. it is not used by the
// function itself.
// ================================================================
export const getLastPartOfArray = (arr) => arr.slice(0).pop();

// ================================================================
// Removes all the empty array entries inside an array of arrays.
// This is actually just a optional optimization that will remove
// any contents that are empty arrays themselves. Which is useful
// in returning a simpler set of data when they dont convey much.
// ================================================================
export const removeEmptyValues = (arr, removeEmpty) =>
  removeEmpty ? arr.filter(x => x.length > 0) : arr;
