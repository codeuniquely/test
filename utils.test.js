import { getLastPartOfArray, removeEmptyValues } from './utils.js'

// =======================================================
// We will be using these helper functions during testing
// and in the function library. We should take the time to
// make sure thet the functions do what we expect them to.
// =======================================================

describe('getLastPartOfArray', () => {
  test('is defined', () => {
    expect(getLastPartOfArray).toBeDefined();
  });

  test('returns undefined if thre are no elements in the array', () => {
    expect(getLastPartOfArray([])).toEqual(undefined);
  });

  test('returns the last element of an array', () => {
    expect(getLastPartOfArray([1,2,3,4,5,6])).toEqual(6);
    expect(getLastPartOfArray([[1],[2],[3],[4],[5],[6]])).toEqual([6]);
  });
});

describe('removeEmptyValues', () => {
  const array = [[], [1], [], [], [2,3], []];

  test('removeEmptyValues is defined', () => {
    expect(removeEmptyValues).toBeDefined();
  });

  test('works for an empty array without flag', () => {
    expect(removeEmptyValues([])).toEqual([]);
  });

  test('works for an empty array', () => {
    expect(removeEmptyValues([[]], true)).toEqual([]);
  });

  test('does NOT removes all empty arrays without flag', () => {
    // const array = [[], [1], [], [], [2,3], []];
    expect(removeEmptyValues(array)).toEqual(array);
  });

  test('removes all empty arrays inside an array', () => {
    // const array = [[], [1], [], [], [2,3], []];
    expect(removeEmptyValues(array, true)).toEqual([[1],[2,3]]);
  });
});
