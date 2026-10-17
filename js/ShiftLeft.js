// https://www.codewars.com/kata/5bdc191306a8a678f6000187

function shiftLeft(s, t) {
  let i = s.length, j = t.length;
  
  //Subtracting from the right assuming the same words 
  //is the same as shifting left
  //because the lengths give the max possible count
  //until we hit the difference
  while (i >= 0 && j >= 0 && s[i] == t[j]){
    i--, j--;
  }
  return (i + 1) + (j + 1);
}
