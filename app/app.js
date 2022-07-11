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
// bodyparser: body를 보기 위한 도구    
const bodyParser = require("body-parser");

// 환경 변수 셋팅
const dotenv = require("dotenv");
dotenv.config({ path: './.env'});

//로그 관리(morgan)
//const morgan = require("morgan");
//const accessLogStream  = require("./src/config/log");

//로그 관리
//const logger = require("./src/config/logger");

const app = express();

// routing
const home = require("./src/routes/home");

//setting view
app.set("views", "./src/views"); 
app.set("view engine", "ejs");

//미들웨어 설정
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url을 통해 전달되는 데이터의 한글, 공백 등과 같은 문자가 포함될 경우 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/", home); // index.js 연결(use -> 미들웨어 등록해주는 메소드) 

// morgan 미들웨어 등록
//app.use(morgan("dev"));
//app.use(morgan("common", {stream: accessLogStream}));
//app.use(morgan("common", {stream: logger.stream}));

module.exports = app;

