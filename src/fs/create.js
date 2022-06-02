import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const create = async () => {
    const message = 'I am fresh and young';
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    await fs.promises.writeFile(pathToFile, message, {
        flag: 'wx'
    }).catch((err) => {
        throw new Error('FS operation failed')
    });
};
create();