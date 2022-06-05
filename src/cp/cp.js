import path from 'path';
import {fileURLToPath} from 'url';
import { spawn } from 'child_process';

const args = process.argv.slice(2);
const __dirname = fileURLToPath(new URL('.',import.meta.url));
const pathToScript = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
    const child = spawn('node', [pathToScript, args], {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};
spawnChildProcess(args);