const fs = require('fs');

module.exports = function (fileName) {
  const fileContents = fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  });
  process.stdout.write(fileContents);
}
