// https://www.codewars.com/kata/5669a5113c8ebf16ed00004c

function substringTest(str1, str2){
  //Find out which string to run .includes from
  const biggerString = str1.length > str2.length ? str1 : str2;
  const smallerString = str1.length < str2.length ? str1 : str2;
  
  for(let i = smallerString.length-1; i > 2; i-- ){
    //As we decrease the size check from both ends for possible substring
    if(biggerString.includes(smallerString.slice(i)) ||
      biggerString.includes(smallerString.slice(0, -i))){
      return true;
    }
  }
  
  return false;
}
