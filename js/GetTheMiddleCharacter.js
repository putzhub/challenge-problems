// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {

  const i = parseInt(s.length / 2);
  const arr = s.split("");
  return s.length % 2 ? arr[i].toString() : arr.slice(i-1,i+1).join("");
}
