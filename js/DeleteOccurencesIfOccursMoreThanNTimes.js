// https://www.codewars.com/kata/554ca54ffa7d91b236000023/

function deleteNth(arr,n){
  //setup for hash map
  const map = new Map();
  let result = [];

  //Count each occurrence & only push if below n
  arr.forEach((num, i, arr) => {
    const count = map.get(num) ? map.get(num) : 0;
    map.set(num, count + 1);
    if(count < n){
      result.push(num);
    }
  })

  return result;
}
