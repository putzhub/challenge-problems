// https://www.codewars.com/kata/643869cb0e7a563b722d50ad/javascript

// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate', 'User-Agent': "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)" }

const wikidataScraper = async (url) => {
  //Send a request using the appropriate headers according to
  //https://www.wikidata.org/wiki/Wikidata:Data_access
  const response = await fetch(url, {method: "GET", headers: headers});
  const data = await response.json();
  //Returned data object uses id as obj property
  const id = Object.keys(data.entities)[0];
  const pageData = data.entities[id];
  
  return {
    id: pageData.id,
    label: pageData.labels.en.value || "No Label",
    description: pageData.descriptions.en.value || "No Description"
  }
}
