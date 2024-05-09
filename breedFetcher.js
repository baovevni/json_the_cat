const needle = require('needle');

const args = process.argv.slice(2);
const breed = args[0];
needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Error occurred while fetching breed information:', error);
  } else if (!body || body.length === 0) {
    console.error(`No information found for '${breed}'`);
  } else {
    console.log(body);
  }
});