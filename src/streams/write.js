import fs from 'fs';

const write = async () => {
    const writableStream = fs.createWriteStream('./files/fileToWrite.txt')
    process.stdin.pipe(writableStream);
};

await write();