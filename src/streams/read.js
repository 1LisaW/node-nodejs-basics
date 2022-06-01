import { createReadStream } from "fs";
import path from 'path';
import url from "url";

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const read = async () => {
    
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(pathToFile);
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

read();