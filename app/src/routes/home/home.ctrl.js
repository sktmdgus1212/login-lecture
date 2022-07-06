"use strict"
 //controller 분리

const UserStorage = require("../../model/UserStoarage");

 //front
const output = {
    hello: (req, res) =>{
        //res.send();
        res.render("home/index");
    },
    login: (req, res) =>{
        res.render("home/login");
    }
}

//back
const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        console.log(UserStorage.getUsers("id", "psword"));
        const response = {};
        
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        response.success = false;
        response.msg = "fail login";
        return res.json(response);
    }
}

module.exports = { // 밖에서 사용하도록 내보냄
    output,
    process,
};
