const { doesNotMatch } = require('assert');
const fs = require('fs');

module.exports = function (fileName, done) {
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) done('Something went wrong!');
    done(data);
  });
}
