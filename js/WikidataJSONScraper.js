// https://www.codewars.com/kata/643869cb0e7a563b722d50ad/javascript

const axios = require('axios') 
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate', 'User-Agent': "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)" }

const wikidataScraper = async (url) => {
  
  const response = await axios({method:'GET', url, headers})
  const id = Object.keys(response.data.entities)[0]
  const pageData = response.data.entities[id];
  
  return {
    id: pageData.id,
    label: pageData.labels.en.value || "No Label",
    description: pageData.descriptions.en.value || "No Description"
  }
}
