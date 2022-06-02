import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath( new URL('.',import.meta.url));

export const performCalculations = async () => {

    const runWorker = ( workerData ) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorker, { workerData });
            worker.once("message", result => {
                console.log(`${ workerData }th Fibonacci Number
                calculated in thread id: ${ worker.threadId } is ${result}`);
            });

            worker.on("error", error => {
                console.log(error);
            });

            worker.on("exit", exitCode => {
                if (exitCode !== 0)
                    reject(new Error(`stopped with  ${code} exit code`));
            })
        })
    }
    const cpuCores = os.cpus();
    const pathToWorker = path.join(__dirname,'worker.js');
    cpuCores.forEach( ( _, idx ) => {
        runWorker( idx + 10 );
    })

};

await performCalculations();