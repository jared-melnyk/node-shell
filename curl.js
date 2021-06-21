const request = require('request');


module.exports = function (url, done) {
  request(url, function (err, response, body) {
    if (err) {
      done('Something went wrong!');
    }
    done(body);
  });
}
