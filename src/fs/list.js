import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.',
    import.meta.url));

export const list = async () => {

    const folderPath = path.join(__dirname, 'files');

    async function printRecursion(folderPath, step) {

        const folderContent = await fs.promises.readdir(folderPath, {
                withFileTypes: true
            })
            .catch((err) => {
                throw new Error('FS operation failed');
            });

        for (let fileName of folderContent) {
            if (fileName.isFile()) {
                process.stdout.write(step + fileName.name + '\n');
            } else {
                process.stdout.write('files list in subfolder ',step + fileName.name + ':\n');
                await printRecursion(path.join(folderPath, fileName.name), step + "   ")
            }
        };
    }

    printRecursion(folderPath, "");
};

list();