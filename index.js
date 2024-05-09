const fetchBreedDescription = require('./breedFetcher');

const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error occurred while fetching breed information:', error);
  } else if (description === 'No breed found') {
    console.error(`No information found for ${breedName}`);
  } else {
    console.log(description);
  }
});