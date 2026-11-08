// https://www.codewars.com/kata/5894986e2ddc8f6805000036/

function rot(start, n, rot) {
  return function(ch) {
    return String.fromCharCode((ch.charCodeAt() - start + rot)%n + start)
  }
}


function ROT135(input) {
  return input
    .replace(/[a-z]/g, rot('a'.charCodeAt(), 26, 13))
    .replace(/[A-Z]/g, rot('A'.charCodeAt(), 26, 13))
    .replace(/[0-9]/g, rot('0'.charCodeAt(), 10, 5))
}
