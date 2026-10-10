function descendingOrder(n){
  arr = String(n).split("");
  arr.sort((a, b) => Number(b)-Number(a));
  return Number(arr.join(''));
}
