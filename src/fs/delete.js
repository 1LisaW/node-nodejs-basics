import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const remove = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.promises.unlink(pathToFile);
    } catch {
        throw new Error('FS operation failed');
    }

};

remove()