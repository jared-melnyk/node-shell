const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\n\nprompt > ');
}

process.stdout.write('prompt > ');

// command executer
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const cmdArgs = cmd.split(' ');

  if (cmdArgs[0] === 'pwd') {
    pwd(done);
  } else if (cmdArgs[0] === 'ls') {
    ls(done);
  } else if (cmdArgs[0] === 'cat') {
    cat(cmdArgs[1], done);
  } else if (cmdArgs[0] ==='curl') {
    curl(cmdArgs[1], done);
  } else {
    done(`You typed: ${cmd}`);
  }
});









