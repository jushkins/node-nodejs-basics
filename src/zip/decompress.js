import { createUnzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream';

const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream('./files/archive.gz');
    const output = createWriteStream('./files/fileToCompress.txt');

    pipeline(input, unzip, output, (err) => {
        if (err) console.log(err);
    })
};

await decompress();