// https://www.codewars.com/kata/5845e6a7ae92e294f4000315/

function sumNestedNumbers(arr, pow=1) {
  //reduce is an array method so recurse if it's found, otherwise use the base case
  return arr.reduce( (s,a) => s+(a.reduce ? sumNestedNumbers(a,pow+1) : Math.pow(a,pow)), 0 )
}
