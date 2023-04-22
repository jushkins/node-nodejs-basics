const parseArgs = () => {
    const result = {};
  let i = 0;
  const args = process.argv.slice(2);
  while (i < args.length) {
    if (args[i].startsWith("--") && i + 1 < args.length) {
      const key = args[i].substr(2);
      const value = args[i + 1];
      result[key] = value;
      i += 2;
    } else {
      i++;
    }
  }
  return result;
};

const parsedArgs = parseArgs();

for (const [key, value] of Object.entries(parsedArgs)) {
  console.log(`${key} is ${value}`);
};

parseArgs();