"use strict"
 //controller 분리
const User = require("../../model/User.js");

const logger = require("../../config/logger");

//front
const output = {
    hello: (req, res) =>{
        //res.send();
        logger.info("GET / 304 -홈 화면으로 이동");
        res.render("home/index");
    },
    login: (req, res) =>{
        logger.info("GET /login 304 -로그인 화면으로 이동");
        res.render("home/login");
    },
    register: (req, res) =>{
        logger.info("GET /register 304 -회원가입 화면으로 이동");
        res.render("home/register");
    }
}

//back
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        const url = {
            method: 'POST',
            path: 'login',
            status: response.err? 400 : 200,
            //200~: 정상 응답
            //300~: 페이지 이동
            //400~: 클라이언트 실수
            //500~: 서버 실수
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
       
        const url = {
            method: 'POST',
            path: 'register',
            status: response.err? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    }
}

const log = (response, url) => {
    if(response.err){
        logger.error(`${url.method} /${url.path} ${url.status} Response: ${response.success} ${response.err}"`);
    }
    else{
        logger.info(`${url.method} /${url.path} ${url.status} Response: ${response.success} ${response.msg||''}"`);
    }
}

module.exports = { // 밖에서 사용하도록 내보냄
    output,
    process,
};
