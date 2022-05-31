import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const create = async () => {
    const message = 'I am fresh and young';
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    fs.access(pathToFile, (notExist) => {
        if (!notExist) throw new Error('FS operation failed')
    });
    const writeStream = new fs.createWriteStream(pathToFile, {
        overwrite: false
    });
    await writeStream.write(message);
};
create();