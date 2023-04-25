import { Worker } from 'worker_threads';
import { cpus } from 'os'

const numCores = cpus().length;
const results = [];

const calculateFibonacci = (number, workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', (message) => {
      results[workerData - 10] = message;
      resolve();
    });
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

const performCalculations = async () => {
  const promises = [];

  for (let i = 0; i < numCores; i++) {
    const number = i + 10;
    const promise = calculateFibonacci(number, number);
    promises.push(promise);
  }

  await Promise.all(promises);
  console.log(results);
};

performCalculations();