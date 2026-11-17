// https://www.codewars.com/kata/56896f078dcf3e886c000067

function generateMenu (menuItems) {
  return menuItems.map(({url, text}) => `<a href="${ url }">${ text }</a>`).join('');
}
