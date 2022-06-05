import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath( new URL('.', import.meta.url) );

export const compress = async () => {

    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToCompressedFile = path.join(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToCompressedFile);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);

};

compress()