import fs from 'fs'
import path from 'path'

const create = async () => {
    const filePath = path.join('files', 'fresh.txt');
  try {
    await fs.promises.access(filePath);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    await fs.promises.writeFile(filePath, 'I am fresh and young');
  }
};

await create();