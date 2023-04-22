import { readFile } from 'node:fs/promises';
import {join, dirname} from 'path'
import { fileURLToPath } from 'node:url';
import { log } from 'node:console';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRead.txt')
    try {
        if (!filePath) {
            throw new Error('FS operation failed')
        } else {
            const contents = await readFile(filePath, { encoding: 'utf8' });
            log(contents);
        }
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`)
    }
};

await read();