// import test helper - will be tested separately
import { getLastPartOfArray } from './utils.js'

import { groupArrayElements } from './groupArrayElements.js'

// =================================================
// testing of the `groupArrayElements` functionality
// =================================================
test('groupArrayElements is defined', () => {
  expect(groupArrayElements).toBeDefined();
});

test('not passing an array gives an error', () => {
  expect(() => {
    groupArrayElements("this is not an array");
  }).toThrow("The array must be defined");
});

test('not passing `N` value greater than 0 (zero) gives an error', () => {
  expect(() => {
    groupArrayElements([], 0);
  }).toThrow("Number of divisions must be whole number greater than 0");
});

test('calling with coded defaults returns an empty array result', () => {
  expect(groupArrayElements()).toEqual([[]]);
});

// =====================================================
// When passing an empty array and a 'N' divisor we will
// get `N`` arrays in total each with nothing in them...
// =====================================================
test('Empty array with a `N` value, returns `N` empty arrays', () => {
  expect(groupArrayElements([], 1)).toEqual([[]]);
  expect(groupArrayElements([], 3)).toEqual([[],[],[]]);
});

// =============================================================
// When we have a `N` value of 1 we can always divide the length
// by the value and get no remainder. then accordingto the rules
// we must split the result into equally sized `N` array chunks
// and return this as the answer. Effectively wrapping the array
// originally passed in a resultant array to form the answer...
// =============================================================
test('calling with a `N` value of 1 just returns the array', () => {
  const array = [1,2,3,4,5,6,7];

  // test an `arbitary` length array
  expect(groupArrayElements(array, 1)).toEqual([array]);
});

// ==============================================================
// When we can divide the array equally by `N` then we can simply
// return the array split into `N`` equal parts as the spec says.
// We would expect the results array to be split into equal parts
// ==============================================================
test('calling when `N` value splits the array equally', () => {
  const array = [1,2,3,4,5,6];

  const expected2 = [[1,2,3], [4,5,6]];
  const expected3 = [[1,2], [3,4], [5,6]];
  const expected6 = [[1], [2], [3], [4], [5], [6]];

  expect(groupArrayElements(array, 2)).toEqual(expected2);
  expect(groupArrayElements(array, 3)).toEqual(expected3);
  expect(groupArrayElements(array, 6)).toEqual(expected6);
});

// =============================================================
// when not equally divisable the LAST array part must have a
// LENGTH that is EQUAL to the REMAINDER calulated by division
// Here we are using the `getLastPartOfArray` hlper function...
// =============================================================
test('Final part should have a length equal to the remainder', () => {
  // 1 array element, `N` = 3
  // remainder: 1 % 3 => 1,
  // (last part of result has 1x elements)
  expect(getLastPartOfArray(groupArrayElements([1], 3))).toEqual([1]);

  // 1 array elements, `N` = 3
  // remainder: 2 % 3 => 2,
  // (last part of result has 2x elements)
  expect(getLastPartOfArray(groupArrayElements([1,2], 3))).toEqual([1,2]);

  // 5 array elements, `N` = 3
  // remainder: 5 % 3 => 2,
  // (last part of result has 2x elements)
  expect(getLastPartOfArray(groupArrayElements([1,2,3,4,5], 3))).toEqual([4,5]);
});

// ===============================================================
// We assert that the result expected is the test is NOT correct
// ===============================================================
test('The example given in test spec is actually INCORRECT', () => {
  const actual = groupArrayElements([1,2,3,4,5], 3);

  expect(actual).not.toEqual([[1,2], [3,5], [5]]);
});

// =============================================================
// Warning Contradictory requirements are being exposed here !!!
// =============================================================
test('contradiction #2', () => {
  const array = [1,2,3,4];

  // we would expect the array to be split equally
  const expected1 = [[1,2,3], [4,5,6]];
  const expected2 = [[1,2], [3,4], [5,6]];

  // test [1]
  expect(groupArrayElements([1], 3)).toEqual([[],[],[1]]);

  // test [1, 2]
  expect(groupArrayElements([1,2], 3)).toEqual([[],[], [1,2]]);

  // test [1, 2, 3, 4]
  expect(groupArrayElements([1,2,3,4], 3)).toEqual([[1,2], [3], [4]]);

  // test [1, 2, 3, 5]
  expect(groupArrayElements([1,2,3,4,5], 3)).toEqual([[1,2], [3], [4,5]]);
});
