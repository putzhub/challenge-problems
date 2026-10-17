// https://www.codewars.com/kata/585a033e3a36cdc50a00011c

function freqSeq(str, sep) {
  let dict = {};
  
  for(const letter of str){
    dict[letter] = Number(dict[letter] === undefined ? 1 : dict[letter] + 1);
  }
  for(const key of Object.keys(dict)){
    str = str.replaceAll(key, `${dict[key]}${sep}`);
  }
  return str.slice(0, -1);
}
