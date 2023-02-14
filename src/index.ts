const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/stepDefinitions/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar`;
                
const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

export { dev, smoke, regression}