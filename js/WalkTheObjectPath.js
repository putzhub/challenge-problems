// https://www.codewars.com/kata/59418db3f5c394eca80000ef

function find(object, path) {
  // Iterate through the path until we either find the property or don't
  let obj = object;
  for(const p of path.split(".")){
    //avoid errors if the object is undefined
    obj = obj?.hasOwnProperty(p) ? obj[p] : undefined;
  }
  return obj;
}
