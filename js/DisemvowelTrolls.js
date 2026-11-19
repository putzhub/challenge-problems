// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  //regex solution
  //return str.replace(/[aeiouAEIOU]/g, "");
  
  for(const c of "aeiouAEIOU"){
    str = str.replaceAll(c, "");
  }
  
  return str
}
