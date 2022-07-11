"use strict"

const app = require("../app");
const PORT = process.env.PORT || 3000;
const logger = require("../src/config/logger");

app.listen(PORT, () => { // open 3000 port
    logger.info(`${PORT} Port Server Start`);
 });