import { createWriteStream } from "fs";
import path from 'path';
import url from "url";

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const write = async () => {

    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(pathToFile);
    process.stdin.on('data', (data)=>{
        writeStream.write(data.toString());
    });
};

write();