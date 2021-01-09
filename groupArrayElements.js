// ================================================================
// name:
//   groupArrayElements
//
// requirements:
//   Given an array of length >= 0, and a positive integer N
//   return the contents of the array divided into equally sized arrays.
//
//   Where the size of the original array cannot be divided equally by N,
//   the final part should have a length equal to the remainder.
//
// inputs:
//   array:     Array
//   n          integer greate than 0
//
// result:
//   array of arrays
//
//
// *** IMPORTANT !!! ***
//  The requirements listed above are actually contradictory
//
// Take the case where there are 5 items in the data array
// and the value of 'N' is given as 3 (three)
//
// it is clear to see that in dividing 5 by 3 we end up with
// 1 lot of 'N' (3) and we are left with a remainder of 2 items...
//
// In fact the test specification gives this exact example:
//    => groupArrayElements([ 1, 2, 3, 4, 5 ], 3 );
//
// and gives the answer as: [ [1,2], [3,4], [5] ]
//
// *** WARNING !!! ***
//
// THIS IS WRONG. (according the rules listed above, whic state
// that the last section MUST BE (remainder) items in length and
// the results must be formatted as [ [x], [y], [4,5] ]
//
// This means there are two possible outcomes;
//   [ [1], [2,3], [4,5] ]  and  [ [1,2], [3], [4,5] ]
//
// Neither of these answers have EQUAL array sizes for the results
// We cannot return the contents of the array divided into equally
// sized arrays.
//
// ================================================================


const removeEmptyValues = (arr, removeEmpty) => {
  return removeEmpty ? arr.filter(x => x.length > 0) : arr;
}

export const groupArrayElements = (array = [], n = 1, removeEmpty = false) => {
  // check we have been given an Array
  if (!Array.isArray(array) || !array) {
    throw Error('The array must be defined');
  }

  // make sure we have an integer value (round down)
  const number = Math.floor(n);

  // check that we have a valid integer
  if (number <= 0) {
    throw Error('Number of divisions must be whole number greater than 0');
  }

  // The result will always be an array with 'N' items
  // Construct a new array with `N` empty elements...
  const result = new Array(number).fill();

  // ===========================================
  // short-curcuit when we only want 1 division,
  // it is equalvalent to doing the following...
  //
  // result.push(array);
  // return result;
  // ===========================================
  if (number === 1) {
    return removeEmpty ? array : [array];
  }

  const length = array.length;

  // get the reminder of the division by using the modulus function
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  const reminder = length % number;
  const itemsInSplit = Math.ceil(length / number);

  // `clone` the original array so there is no mutation of the input
  // https://davidwalsh.name/javascript-clone-array for more detail.
  const items = array.slice(0);

  // special case where there is no reminder
  if (reminder === 0) {
    //
    // EXPLAIN THIS !!!
    //
    return removeEmptyValues(result.map(_ => items.splice(0, itemsInSplit)), removeEmpty);
  }

  // get elements to make the "remainder" parts of result.
  // uses a negative number to return items from the end
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  const lastPart = items.slice(-reminder);

  // the array poition
  const lastPos = number - 1;

  // Always make the last returned element the remainder items
  // there will be "remainder x" items in this result element.
  result[lastPos] = lastPart;

  // ??? !!! ???
  // return new Array(number).fill().map(_ => items.splice(0, itemsInSplit));
  const splitSize = Math.ceil((length - reminder) / lastPos);

  // !!!
  // split the parts that come before the remainder
  // items in the array, equally into `N`- 1 groups
  // we need crop out the `lastPart` from the items
  // ...
  const frontSection = items.slice(0, length - reminder);

  // Why not just destructure this ???
  for(let i = 0; i < lastPos ; i++) {
    // Splice
    // this mutates `frontSection` by removing
    // a section that is splitSize in length
    // from teh start of the array and leaves
    // the orginal array splitSize smaller
    // https://www.w3schools.com/jsref/jsref_splice.asp
    result[i] = frontSection.splice(0, splitSize)
  }

  // ===========================================
  // this is a optimization that will remove any
  // contents that are empty arrays themselves..
  // this may be useful in returning a simpler
  // set of data when content dont convey much.
  // ===========================================

  // return the result
  return removeEmptyValues(result, removeEmpty);
};
