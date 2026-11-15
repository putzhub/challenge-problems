// https://www.codewars.com/kata/57f669477c9a2b1b9700022d

function orderType(arr) {
  // inc / dec combined select the index to return
  let inc = 1;
  let dec = 2;
  // Numbers don't have a length property
  let len = x => x.length || String(x).length;
  
  //Start at 1 to avoid index error issues
  for(let i=1; i<arr.length; i++){
    let diff = len(arr[i-1])-len(arr[i]);
    //diff changes represent sorting pattern
    if (diff<0) dec=0;
    if (diff>0) inc=0;
  }
  
  return ["Unsorted", "Increasing", "Decreasing", "Constant"][inc+dec];
}
