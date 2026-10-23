// https://www.codewars.com/kata/5594463eaf1701909c0000d4

function arraySum(arr) {
  let sum = 0;
  //base case: Not an array
  for(const e of arr){
    if(Array.isArray(e)){
      //recursive case
      sum += arraySum(e);
    } else if (typeof e === "number"){
      //base case
      sum += e;
    }
  }
  
  return sum;
}
