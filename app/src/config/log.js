//morgan log

const fs = require("fs"); //file system
const appRoot = require("app-root-path"); // root경로

const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`, 
    { flags: 'a' }
);

module.exports = accessLogStream;

