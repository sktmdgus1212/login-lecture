"use strict"
 //controller 분리
const User = require("../../model/User.js");
 //front
const output = {
    hello: (req, res) =>{
        //res.send();
        res.render("home/index");
    },
    login: (req, res) =>{
        res.render("home/login");
    },
    register: (req, res) =>{
        res.render("home/register");
    }
}

//back
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
}

module.exports = { // 밖에서 사용하도록 내보냄
    output,
    process,
};
