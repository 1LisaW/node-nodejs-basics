import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const read = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const fileContent = await fs.promises.readFile(pathToFile,{flag: 'r'})
        .catch( (err) => {
        throw new Error('FS operation failed')
        });
    process.stdout.write(fileContent);
};

read();