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
To intsall the function project and prep the test environment

`npm install`

 ## run all tests
 To run the tests simply type the following at the command line.

`npm test`


Here I use a small util function library during testing and to add some additional functinality not asked for in the original spec. Since the additional functional is totally optional it felt right to remove these functions to a separate helper library.
The library is test independantly of the main code to validate its functions.

 ## Expected Test results

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
    ✓ getLastPartOfArray works for an empty array
    ✓ works for an empty array (5 ms)
    ✓ does NOT removes all empty arrays without flag
    ✓ removes all empty arrays inside an array


I did not MOCK out the use of `removeEmptyValues` duing testsing as i went for a more Integration style test and in realiy the mock would have been close in functionalit to the original one line of code.

## Code Coverage Results
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |
 groupArrayElements.js |     100 |      100 |     100 |     100 |
 utils.js              |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------


Test Suites: 2 passed, 2 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        1.615 s
