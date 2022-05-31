export const parseEnv = () => {
    const rssEnvVars = Object.entries(process.env)
        .reduce((acc,[key, value]) => {
            if (key.match('RSS')) {
                acc.push(`${key} = ${value}`)
            }
            return acc;
        },[]);
    process.stdout.write(rssEnvVars.join('; '))
};
parseEnv();

