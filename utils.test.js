import { getLastPartOfArray } from './utils.js'

// =======================================================
// As we will be using this helper function during testing
// in the main test library, we should take some time to
// make sure thet the function does what we expect it to.
// =======================================================

// make sure the function is defined
test('getLastPartOfArray is defined', () => {
  expect(getLastPartOfArray).toBeDefined();
});

// make sure it retruned the
test('getLastPartOfArray returns undefined if thre are no elements', () => {
  expect(getLastPartOfArray([])).toEqual(undefined);
});

test('getLastPartOfArray return the last element of an array', () => {
  expect(getLastPartOfArray([1,2,3,4,5,6])).toEqual(6);
  expect(getLastPartOfArray([[1],[2],[3],[4],[5],[6]])).toEqual([6]);
});
