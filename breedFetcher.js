const needle = require('needle');



const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else if (!body || body.length === 0) {
      return callback(null, 'No breed found');
    } else
      return callback(null, body[0].description);
  });
};

module.exports = fetchBreedDescription;