import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const rename = async () => {
    const pathToFolder = path.join(__dirname, 'files');
    const pathToFile = path.join(pathToFolder, 'wrongFilename.txt');
    const renamedPathToFile = path.join(pathToFolder, 'properFilename.md');

    async function isFileExist(path) {
        try {
            await fs.promises.access(path);
            return true
        } catch {
            return false
        };
    }

    const isFileRenamed = await isFileExist(renamedPathToFile);
    if (isFileRenamed) throw new Error('FS operation failed');

    await fs.promises.rename(pathToFile, renamedPathToFile)
        .catch((error) => {
            throw new Error('FS operation failed')
        });

}


rename()