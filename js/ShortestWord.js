// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  let words = s.split(" ");
  //Sort in ascending order
  words.sort((a,b) => a.length - b.length);
  return words[0].length;  
}
