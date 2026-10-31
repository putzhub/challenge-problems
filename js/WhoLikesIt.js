//https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {  
  // Count # of names
  if(names.length > 3){
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
  } else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 1){
    return `${names[0]} likes this`;
  } else {
    return "no one likes this";
  }
}

//Clever solution
// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`, 
//     2: `${names[0]} and ${names[1]} like this`, 
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//   }[Math.min(4, names.length)]
// }
