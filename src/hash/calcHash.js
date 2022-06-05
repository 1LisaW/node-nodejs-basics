import { fileURLToPath } from 'url';
import path from 'path';
import {createHash} from 'crypto';
import { createReadStream } from 'fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const text = createReadStream(pathToFile);
    text.pipe(hash).setEncoding('hex').pipe(process.stdout)
};

calculateHash();