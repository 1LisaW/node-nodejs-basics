import { pipeline, Transform } from "stream";

export const transform = async () => {

    const reverseText = new Transform({
        transform(chunk, encoding, callback){
            callback(null, String(chunk).split('').reverse().join(''));
        }
    });
    pipeline(
        process.stdin,
        reverseText,
        process.stdout,
        (err) => {
            throw new Error();
        }
    )
};
transform();