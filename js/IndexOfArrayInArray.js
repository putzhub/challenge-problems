// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

var searchArray = function (arrayToSearch, query) {
  //Destructure array into one big array, throw error if one fails our conditions
  if([...arrayToSearch, query].some(a => !Array.isArray(a) || a.length !== 2)){
    throw Error();
  }
  //Turning array into string is easier than individually verifying array contents
  return arrayToSearch.map(JSON.stringify).indexOf(JSON.stringify(query))
}
