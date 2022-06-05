import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath( new URL('.',import.meta.url));
const resArr = [];

export const performCalculations = async () => {
    const runWorker = (workerData) => {
        return new Promise((resolve, reject) => {
            const resObj = {};
            const worker = new Worker(pathToWorker, { workerData });
            worker.once("message", result => {
                // console.log(`${ workerData }th Fibonacci Number
                // calculated in thread id: ${ worker.threadId } is ${result}`);
                resolve({
                    'status': 'resolved',
                    'data': result
                });
            });

            worker.on("error", error => {
                console.log(error);
            });

            worker.on("exit", exitCode => {
                if (exitCode !== 0) {
                 resolve({
                     'status': 'error',
                     'data': null,
                 });
                }
            });
            
        });
    }
    const cpuCores = os.cpus();
    const pathToWorker = path.join(__dirname,'worker.js');
    for (let idx = 0; idx< cpuCores.length; idx++ ){
        resArr[idx] = runWorker(idx + 10);
    }
    const resultArray = (await Promise.allSettled(resArr)).map( (item =>{
        return item.value;
    }))
    console.log(resultArray);

};

await performCalculations();