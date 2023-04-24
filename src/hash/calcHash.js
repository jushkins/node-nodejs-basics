import { log } from 'console';
import { createHash } from 'crypto'
import fs from 'fs';

const calculateHash = async () => {
    const buff = await fs.promises.readFile('./files/fileToCalculateHashFor.txt')
    const hash = createHash('sha256').update(buff).digest('hex')
    log(hash)
};

await calculateHash();