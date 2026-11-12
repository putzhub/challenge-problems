// https://www.codewars.com/kata/57a6633153ba33189e000074

const orderedCount = function (text) {
  let result = []
  text.split("").map((e, i, a) => {
    if(a.indexOf(e) === i){
      result.push([e, a.filter(f => e === f).length]);
    }
  });
  return result;
}
