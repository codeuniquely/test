import { removeEmptyValues } from './utils.js'

// ================================================================
// Given an array of length >= 0, and a positive integer N
// return the contents of the array divided into equally sized arrays.
//
// Where the size of the original array cannot be divided equally by N,
// the final part should have a length equal to the remainder.
// ================================================================
export const groupArrayElements = (array = [], n = 1, removeEmpty = false) => {
  // check we have been given an Array
  if (!Array.isArray(array) || !array) {
    throw Error('The array must be defined');
  }

  // make sure we have an integer value
  const number = Math.floor(n);
  if (number <= 0) {
    throw Error('Number of divisions must be whole number greater than 0');
  }

  // short-curcuit when we only want 1 division,
  if (number === 1) {
    return removeEmptyValues([array], removeEmpty);
  }

  // The result will always be an array with 'N' items
  // Construct a new array with `N` empty elements...
  const result = new Array(number).fill();

  // get some constants used for splitting up the sections
  const length = array.length;
  const reminder = length % number;
  const itemsInSplit = Math.ceil(length / number);
  const lastPos = number - 1;

  // `clone` array to prevent mutation of the original
  const items = array.slice(0);

  // special case where there is no reminder
  // using splce to cut out `itemsInSplit` sized chunks
  if (reminder === 0) {
    return removeEmptyValues(result.map(_ => items.splice(0, itemsInSplit)), removeEmpty);
  }

  // Get elements that form the "remainder" part of the result.
  // Last result part is is always the remainder items
  const lastPart = items.slice(-reminder);
  result[lastPos] = lastPart;

  // split the parts that come before the remainder
  // items in the array, equally into `N`- 1 groups
  // we need crop out the `lastPart` from the items
  const splitSize = Math.ceil((length - reminder) / lastPos);
  const frontSection = items.slice(0, length - reminder);

  // use splce (again) cut out `splitSize` chunks
  for(let i = 0; i < lastPos ; i++) {
    result[i] = frontSection.splice(0, splitSize)
  }

  // return the result
  return removeEmptyValues(result, removeEmpty);
};
