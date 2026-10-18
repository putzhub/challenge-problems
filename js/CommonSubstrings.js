// https://www.codewars.com/kata/5669a5113c8ebf16ed00004c

function substringTest(str1, str2){
  //Normalize for comparisons
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  //Only check each possible 2 char subset since it's the minimum we need to pass
  for(let i=0; i < str2.length-1; i++){
    if(str1.indexOf(str2.substring(i, i+2)) > -1){
      return true;
    }
  }
  
  return false;
}
