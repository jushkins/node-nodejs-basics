import { join, dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'node:url';
import { log } from 'console';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files');
  const newFolder = join(__dirname, 'files_copy');

  if (filePath) {
    try {
      await fs.promises.mkdir(newFolder);
      const files = await fs.promises.readdir(filePath);

      for (const file of files) {
        const sourcePath = join(filePath, file);
        const destPath = join(newFolder, file);
        await fs.promises.copyFile(sourcePath, destPath);
      }

      log('Files copied successfully!');
    } catch (error) {
      throw new Error(`FS operation failed ${error.message}`);
    }
  } else if (newFolder || !filePath) {
    throw new Error(`FS operation failed ${error.message}`);
  }
};

await copy();