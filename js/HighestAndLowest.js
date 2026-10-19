// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  numbers = numbers.split(" ").sort((a, b) => Number(b) - Number(a));
  return `${numbers[0]} ${numbers[numbers.length-1]}`
}
