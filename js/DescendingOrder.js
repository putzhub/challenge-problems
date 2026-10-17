// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
  arr = String(n).split("");
  arr.sort((a, b) => Number(b)-Number(a));
  return Number(arr.join(''));
}
