import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./files/script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  process.stdin.on('end', () => {
    childProcess.stdin.end();
  });

  childProcess.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
};

spawnChildProcess(['someArgument1', 'someArgument2', '3rd argument', '4th arguments']);
