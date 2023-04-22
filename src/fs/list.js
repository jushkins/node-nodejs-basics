import {promises as fsPromises} from 'fs'
import {join, dirname} from 'path'
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const contents = await fsPromises.readdir('files');
    const filePath = join(__dirname, 'files') 
    try {
        if (!filePath) {
            throw new Error('FS operation failed')
        } else {
            const filenames = contents.filter((filename) => {
                return !filename.startsWith('.');
            })
            console.log('Filenames in the file:', filenames );
        }
     } catch (error) {
        throw new Error(`FS operation failed: ${error.message}` )
     }
};

await list();