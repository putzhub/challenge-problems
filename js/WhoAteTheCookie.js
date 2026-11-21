// https://www.codewars.com/kata/55a996e0e8520afab9000055

function cookie(x){
  let eater;
  
  if(typeof x === "string"){
    eater = "Zach";
  } else if (typeof x === "number"){
    eater = "Monica";
  } else {
    eater = "the dog";
  }
  
  return `Who ate the last cookie? It was ${eater}!`
}
