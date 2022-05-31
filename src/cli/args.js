export const parseArgs = () => {
    const args = process.argv.slice(2);
    const printString = args.reduce((acc, item, idx) => {
        if (item.match('--')) { 
            acc += item.slice(2) + ' is ';
        } else{
            const symbol = (idx === args.length - 1) ? '' : ', '
            acc += item + symbol
        }
        return acc;
    },'')
    process.stdout.write(printString);
};
parseArgs();