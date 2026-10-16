function digits(num){
  let res = [];
  
  //Turn the num into an array to iterate on each digit
  String(num).split('').forEach((d,i,arr) => {
    //Each past sum is accounted for, avoid duplicates with j=i+1
    for(let j=i+1;j<arr.length;j++)
      //For each doesn't return, store for later
      res.push(Number(d)+Number(arr[j]));
  });
  return res;
}
