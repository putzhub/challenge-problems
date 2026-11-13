// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr){
  //Set result as first arr element to avoid errors
  let result = arr[0];
  // put array into a hash map
  let map = arr.reduce((m, e) => m.set(e, m.has(e) ? m.get(e) + 1 : 1), new Map());
  // return the largest count of the same element
  for(const [key, value] of map){
    if(value > map.get(result)){
      result = key;
    } else if (value === map.get(result)){
      result = key > result ? key : result;
    }
  }
  return result;
}
