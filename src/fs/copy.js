import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const copy = async () => {

    const folderPath = path.join(__dirname, 'files');
    const copyFolderPath = path.join(__dirname, 'files_copy');

    async function copyRecursion(folderPath, copyFolderPath) {

        const filesList = await fs.promises.readdir(folderPath, {
                withFileTypes: true
            })
            .catch((notExist) => {
                if (notExist) throw new Error('FS operation failed');
            });

        await fs.promises.mkdir(copyFolderPath).catch((err) => {
            if (err) throw new Error('FS operation failed')
        });
        for (let fileName of filesList) {
            if (fileName.isFile()) {
                const pathToFileName = path.join(folderPath, fileName.name);
                const pathToCopyFileName = path.join(copyFolderPath, fileName.name);

                await fs.promises.copyFile(pathToFileName, pathToCopyFileName)
            } else {
                copyRecursion(path.join(folderPath, fileName.name),
                    path.join(copyFolderPath, fileName.name))
            }
        }
    }
    copyRecursion(folderPath, copyFolderPath);
};

copy();