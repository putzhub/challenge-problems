// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
  let output = []
  for(const player of data){
    if (player[0] >= 55 && player[1] > 7){
      output.push("Senior");
    } else {
      output.push("Open");
    }
  }
  
  return output;
}
