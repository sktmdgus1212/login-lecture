"use strict"
 //controller 분리
const User = require("../../model/User.js");

const logger = require("../../config/logger");

//front
const output = {
    hello: (req, res) =>{
        //res.send();
        logger.info("GET / 200 -홈 화면으로 이동");
        res.render("home/index");
    },
    login: (req, res) =>{
        logger.info("GET /login 200 -로그인 화면으로 이동");
        res.render("home/login");
    },
    register: (req, res) =>{
        logger.info("GET /register 200 -회원가입 화면으로 이동");
        res.render("home/register");
    }
}

//back
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if(response.err){
            logger.error(`POST /login 200 ResponseL "success: ${response.success}, msg: ${response.err}"`);
        }
        else{
            logger.info(`POST /login 200 ResponseL "success: ${response.success}, msg: ${response.msg}"`);
        }
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if(response.err){
            logger.error(`POST /register 200 ResponseL "success: ${response.success}, msg: ${response.err}"`);
        }
        else{
            logger.info(`POST /register 200 ResponseL "success: ${response.success}, msg: ${response.msg}"`);
        }
        return res.json(response);
    }
}

module.exports = { // 밖에서 사용하도록 내보냄
    output,
    process,
};
