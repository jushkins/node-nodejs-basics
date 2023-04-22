const parseEnv = () => {
    const rssVars = {name: 'hello', age: 17};
    for (const [key, value] of Object.entries(process.env)) {
        const [prefix, name] = key.split('_');
        if (prefix === 'RSS' && name in rssVars) {
          rssVars[name] = value;
        }
      }
    
      const rssStr = Object.entries(rssVars).map(([name, value]) => `RSS_${name}=${value}`).join("; ");
      console.log(rssStr);
};

parseEnv();