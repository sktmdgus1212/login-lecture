//const http = require("http"); // http server module download
//const app = http.createServer((req, res) => {
//    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"}) // set html, korean 
//    if(req.url === '/'){
//        res.end("this is rootㅁㅁㅁ");
//   }
//    else if(req.url === '/login'){
//        res.end("this is login");
//    }
//});

//app.listen(3001, () => {
//    console.log("http server run");
//})

//---------------------------------

// express module download
const express = require("express"); 
const app = express();

// routing
const home = require("./routes/home");
app.use("/", home); // index.js 연결(use -> 미들웨어 등록해주는 메소드) 

//setting app(view control)
app.set("views", "./views"); 
app.set("view engine", "ejs");

module.exports = app;

