// https://www.codewars.com/kata/56b3b27cadd4ad275500000c

function wordCount(s) {
  //convert invalid characters into spaces
  //split string by spaces
  //count length
  const accepted = "abcdefghijklmnopqrstuvwxyz";
  const not_counted = ["a", "the", "on", "at", "of", "upon", "in", "as"]
  
  let temp = s.split("").map(l => accepted.includes(l.toLowerCase()) ? l.toLowerCase() : " ").join("");
  return temp.split(" ").filter(w => w !== "" && w !== " " && !not_counted.includes(w)).length;
}

// Solution using regex
// const lousyWords = /^(a|as|at|in|of|on|the|upon)$/i
// 
// function wordCount (phrase) {
//   let words = phrase.match(/[a-z]+/gi) || []
// 
//   return words
//     .filter(word => !lousyWords.test(word))
//     .length
// }
