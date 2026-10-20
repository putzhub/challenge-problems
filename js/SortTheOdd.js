// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  //Put the odd ones in a stack
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  //Shift/pop stack into array if odd
  return array.map((x) => x % 2 ? odd.shift() : x);
}
