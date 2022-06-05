import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath( new URL('.', import.meta.url) );

const pathToCompressedFile = path.join(__dirname, 'files', 'archive.gz');
const pathToDecompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

export const decompress = async () => {

    const readStream = createReadStream(pathToCompressedFile);
    const writeStream = createWriteStream(pathToDecompressedFile);
    const gunzip = createUnzip();

    readStream.pipe(gunzip).pipe(writeStream);

};

decompress();