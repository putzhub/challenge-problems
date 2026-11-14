//https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

//P: string with parentheses (ignore {} or [])
//R: string with word between parentheses removed

function removeParentheses(s){
  //keep track of the word & number of parenthesis
  let result = "";
  let p_count = 0;
  //loop through the string
  for(const c of s){
    //keep track of whether we've hit a parenthesis or not.
    if(c === "("){ 
      p_count++; 
    } 
    else if(p_count === 0){
      result += c;
    }
    else if(c === ")") {
      p_count--; 
    }
  }
  //return value
  return result;
}
