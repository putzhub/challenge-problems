// https://www.codewars.com/kata/57fa537f8b0760c7da000407

function countLetter(sentence, letter){
  return sentence
            .split("")
            .filter(f => f.toLowerCase() === letter)
            .reduce((a, c) => {
              return a += c === letter.toUpperCase() ? 2 : 1;
            }, 0)
}

function diamondsAndToads(sentence, fairy) {
  let result = fairy === "good" ? 
      {
        get ruby() {
          return countLetter(sentence, "r")
        },
        get crystal() {
          return countLetter(sentence, "c")
        }
      } :
      {
        get squirrel() {
          return countLetter(sentence, "s")
        },
        get python() {
          return countLetter(sentence, "p")
        }
      };
  
  return result;
}

// Cleaner version someone else wrote as a solution
// const diamondsAndToads = (sentence, fairy) => {
// 
//   let count = char => (sentence.split(char).length - 1);
//   
//   if (fairy === 'good') 
//     return { 
//           ruby: count('r') + count('R') * 2, 
//        crystal: count('c') + count('C') * 2 
//     };
//   
//   if (fairy === 'evil')
//     return { 
//         python: count('p') + count('P') * 2, 
//       squirrel: count('s') + count('S') * 2 
//     };
//     
// }
