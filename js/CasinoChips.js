// https://www.codewars.com/kata/5e0b72d2d772160011133654

function solve(arr){
  //Sorting the array lets us easily deal with the lowest two stacks first
  let [white,green,black] = arr.sort((a,b)=>a-b)
  //Either run out of the lower stacks first or hit max possible
  return Math.min(white+green, Math.floor((white+green+black)/2))
}
