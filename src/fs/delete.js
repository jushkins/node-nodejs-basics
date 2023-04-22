import fs from 'fs/promises'
import {join, dirname} from 'path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRemove.txt')
    try {
        if(!filePath) {
            throw new Error('FS operation failed');
        } else {
            await fs.unlink(filePath);
            console.log('File deleted!');
        }
        
    } catch (error) {
        console.log(`FS operation failed: ${error.message}`);
    }
};

await remove();