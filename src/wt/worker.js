const nthFibonacci = (number) => number < 2 ? number : nthFibonacci(number - 1) + nthFibonacci(number - 2);

const sendResult = (result) => {
  process.send(result);
};

process.on('message', (number) => {
  const result = {
    status: 'resolved',
    data: nthFibonacci(number)
  };
  sendResult(result);
});