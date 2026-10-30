// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let map = new Map();
  
  A.forEach((e, i, a) => {
    let count = map.get(e) ? map.get(e) + 1 : 1;
    map.set(e, count);
  });
  
  for(const key of map.keys()){
    if(map.get(key) % 2){
      return key;
    }
  }
}

// One-liner
// return arr.find((item, index) => arr.filter(el => el == item).length % 2)

// Bitwise optimal solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
