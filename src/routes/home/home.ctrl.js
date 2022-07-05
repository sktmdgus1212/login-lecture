"use strict"
 //controller 분리
const hello = (req, res) =>{
    //res.send();
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = { // 밖에서 사용하도록 내보냄
    hello,
    login,
};
