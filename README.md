 # Test Project
 This is a test project.

 It simply defines and set of test for a single array splitting function.

 ```
Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.

groupArrayElements([ 1 , 2 , 3 , 4 , 5 ], 3 );
 ```

 ## To install the project & code
To simply install the function / project and prep the modules of the test environment.

`npm install`

The test environemnt uses Jest test runner in order to text the function and (utils) and also to provide test code coverage reporting.
The code is written as modules and used ES6 and so includes babel JS to support this.
 - information on jest found at https://jestjs.io/docs/en/cli


 ## run all tests
 To run the tests simply type the following at the command line. (it uses Jest)

`npm test`

Here I use a small util function library during testing and to add some additional functionality not asked for in the original spec. Since the additional functionality is totally optional it felt right to remove these functions to a separate helper library.
The library is tested independently of the main code to validate its functions.

 ## Expected Test results
```
 PASS  ./groupArrayElements.test.js
  groupArrayElements
    ✓ is defined (2 ms)
    ✓ not passing an array gives an error (6 ms)
    ✓ not passing `N` value greater than 0 (zero) gives an error
    ✓ calling with coded defaults returns an empty array result (1 ms)
    ✓ Empty array with a `N` value, returns `N` empty arrays (1 ms)
    ✓ calling with a `N` value of 1 just returns the array
    ✓ calling when `N` value splits the array equally (1 ms)
    ✓ Final part should have a length equal to the remainder
    ✓ splits non remiander elements into parts (they will never be equal) (1 ms)
    ✓ using remove the blanks, works (1 ms)
    ✓ undefind array elements and empty removal still splits equally
    ✓ The example given in test spec is actually INCORRECT

 PASS  ./utils.test.js
  getLastPartOfArray
    ✓ is defined
    ✓ returns undefined if thre are no elements in the array
    ✓ returns the last element of an array (1 ms)
  removeEmptyValues
    ✓ removeEmptyValues is defined
    ✓ works for an empty array without flag
    ✓ works for an empty array (5 ms)
    ✓ does NOT remove all empty arrays without flag
    ✓ removes all empty arrays inside an array
```

I did not MOCK out the use of `removeEmptyValues` during testing as I went for a more Integration style test and in reality the mock would have been close in functionality to the original one line of code anyway.

## Code Coverage Results
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |
 groupArrayElements.js |     100 |      100 |     100 |     100 |
 utils.js              |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------

```
Test Suites: 2 passed, 2 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        1.615 s
```
