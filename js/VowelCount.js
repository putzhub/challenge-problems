//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  return str.split("").filter(e => "aeiou".includes(e)).length;
}
