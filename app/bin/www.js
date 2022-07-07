"use strict"

const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { // open 3000 port
    console.log("server run");
 });