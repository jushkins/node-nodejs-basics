import { log, error as errorLog } from 'console';
import { rename as renameFile, existsSync } from 'fs'
import { join, dirname } from 'path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const wrongFilePath = join(__dirname, 'files', 'wrongFilename.txt')
    const newFilePath = join(__dirname, 'files', 'properFilename.md')

    log(wrongFilePath, newFilePath)
    try {
        const srcExists = existsSync(wrongFilePath);
        if (!srcExists) {
            throw new Error('FS operation failed')
        }
        const dest = existsSync(newFilePath);
        if (dest) {
            throw new Error('FS operation failed')
        }

        renameFile('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
            if (err) throw err;
            console.log('File renamed!');
        })

    } catch (error) {
        errorLog(error)
    }
};

await rename();