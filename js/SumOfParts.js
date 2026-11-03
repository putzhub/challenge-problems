// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/

function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}
