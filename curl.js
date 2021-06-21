const { doesNotMatch } = require('assert');
const request = require('request');


module.exports = function (url, done) {
  request(url, function (err, response, body) {
    if (err) {
      done('Something went wrong!');
    } // response is utilized here
    done(body);
  });
}
