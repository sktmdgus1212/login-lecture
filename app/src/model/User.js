"use strict"

const cli = require("nodemon/lib/cli");
const UserStoarage = require("./UserStoarage");

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const client = this.body;
        const {id, psword} = UserStoarage.getUserInfo(client.id);
        if(id){
            if(id === client.id && psword === client.psword){
                return {success: true};   
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        else{
            return {success: false, msg: "존재하지 않는 계정입니다."};
        }
            
    }

    register(){
        const client = this.body;
        const response = UserStoarage.save(client);
        return response;
    }
}

module.exports = User;