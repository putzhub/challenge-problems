// Odd or Even

function oddOrEven(array) {
   return array.reduce((a,c) => a += c, 0) % 2 ? "odd" : "even";
}
