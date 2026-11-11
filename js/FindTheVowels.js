// https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
  let result = []
  for(let i=0; i < word.length; i++){
    if("aeiouy".includes(word[i].toLowerCase())){result.push(i+1);}
  }
  return result;
}
