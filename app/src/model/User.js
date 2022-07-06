"use strict"

const UserStoarage = require("./UserStoarage");

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const body = this.body;
        const {id, psword} = UserStoarage.getUserInfo(body.id);
        if(id){
            if(id === body.id && psword === body.psword){
                return {success: true};   
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        else{
            return {success: false, msg: "존재하지 않는 계정입니다."};
        }
            
    }
}

module.exports = User;