process.stdout.write('prompt > ');

// command executer
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwdHandler();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});

function pwdHandler() {
  process.stdout.write(process.env.PWD);
}

