import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const read = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    await fs.promises.access(pathToFile)
        .catch((err) => {throw new Error('FS operation failed')});

    const readStream = fs.createReadStream(pathToFile);
    readStream.pipe(process.stdout);
};

read();