import fs from 'fs';

const read = async () => {
    const readbleStream = fs.createReadStream('./files/fileToRead.txt')
    readbleStream.pipe(process.stdout)
};

await read();