// https://www.codewars.com/kata/635b8fa500fba2bef9189473/train/javascript

function phoneWords(str) {
  //Create a dictionary with keys aligned to phonepad & number of presses
  const hash = {
    2 : 'abc',
    3 : 'def', 
    4 : 'ghi',
    5 : 'jkl',
    6 : 'mno',
    7 : 'pqrs',
    8 : 'tuv', 
    9 : 'wxyz',
  }
  
  let word = '';
  
  for(let i = 0; i < str.length; i++){
    const c = str[i];
    
    if(c === '0'){
      word += ' ';
    };
    else if(c !== '1'){
      //Figure out the number of times the key was "pressed"
      let n = 1;
      //Which we know because the following num should be the same
      while(c === str[i+n]){
        n++;
      }
      //Select the last letter if we hit the end of possibilities
      n = Math.min(hash[c].length, n);
      word += hash[c][n-1];
      //Update the index so we start grouping next series of consecutive #s correctly
      i += n-1;
    }
  }
  
  return word;
}
