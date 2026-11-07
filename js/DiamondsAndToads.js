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
