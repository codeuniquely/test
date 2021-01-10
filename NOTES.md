# Some notes about this function

## IMPORTANT !!!

The requirements given for the function are actually contradictory an dned more explanation
when the length of the array does not divide by 'N' equally.

### Working an example
Take the case where there are 5 items in the data array and the value of 'N' is given as 3 (three)

It is clear to see that in dividing 5 by 3 we end up with 1 lot of 'N' (3) and we are left with a remainder of 2 items...

 In fact the test specification gives this exact example:
    => groupArrayElements([ 1, 2, 3, 4, 5 ], 3 );

 but the example answer is given (shown as): [ [1,2], [3,4], [5] ]

 ## Warning - This is wrong !!!

 Whilst this answer is possibly what the author intended it ACTUALLY breaks the rules defined for the function.
 According the rules listed above, which state that the last section *MUST BE* (remainder) items in length.

 In order for this to happen the results would need be formatted as [ [x], [y], [4,5] ]

 This means there are two possible outcomes based on what you chose for the arrays (x) and (y);
   [ [1], [2,3], [4,5] ]  and  [ [1,2], [3], [4,5] ]. I choose to code the latter of these.

 Neither of these answers would result in EQUAL array sizes for (a) and (b) and in fact when not divisable by 'N' and ensuring remiander length last items we cannot return the contents of the array divided into equally sized arrays.

## Other things

### Cloning arrays using slice(0) - so as not to mutate inputs
If you are unsure what this function does or about not mutating inputs (functional programming)
https://davidwalsh.name/javascript-clone-array for more detail.

### using negative slice values
I use a negative number (in some places) in slice to return items from the end of an array
(not the start). Please see https://www.w3schools.com/jsref/jsref_slice_array.asp for more information

### splice things out of an array
Splice mutates the array passed in by extracting a section of `size` in length from the start of the array and leaves the orginal array `size` items smaller
see https://www.w3schools.com/jsref/jsref_splice.asp for more information
