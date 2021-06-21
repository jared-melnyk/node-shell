const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

// command executer
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const cmdArgs = cmd.split(' ');
  console.log(cmdArgs);

  if (cmdArgs[0] === 'pwd') {
    pwd();
  } else if (cmdArgs[0] === 'ls') {
    ls();
  } else if (cmdArgs[0] === 'cat') {
    cat(cmdArgs[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});







