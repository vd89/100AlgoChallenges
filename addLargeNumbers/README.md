<!-- @format -->

## addVeryLargeNumbers

---

Write a program containing a function that takes in any two numbers but in the
form of strings,and returns the sum of both numbers as string.

Quite useful for adding extremely large numbers in javascript.

The need for this program arises because you cannot store more than 53 bits as a
number in purejavascript.

So, to do operations on larger numbers, we convert them into strings and do
operations on it.

The algorithm implemented here is something everyone is familiar with, old
school addition.

Yup, we implement this into our code. Here's how.

a. Take two numbers as string, create a variable

b. Find out which one is longer, we always need a longer number to be on top and
shorter one to beon bottom, so if the second is longer than first, we swap two
numbers.

c . Next, we need to iterate through every digit, from left to right of both
numbers and add each pair ofdigits along with a carried digit.

d. Append the left-most digit of the sum of each pair of digits into the return
variable ‘sum’. Put rest ofthe digits into ‘carry’

e. When we reach the rightmost digit, don’t need to split sum of pair of digits
into carry and a leftmostdigits. we can just append that final sum to our return
variable ‘sum’

Once we're done iterating, we get the sum of two numbers in the form of a
string.

demo of how the function works

<pre>

console.log(add("5987342879234789234897", "23489072349807239487"));   // will return  6010831951584596474384
</pre>
