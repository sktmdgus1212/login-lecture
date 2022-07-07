"use strict"

const cli = require("nodemon/lib/cli");
const UserStoarage = require("./UserStoarage");

class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body;
        const {id, psword} = await UserStoarage.getUserInfo(client.id);
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

    async register(){
        const client = this.body;
        try{
            const response = await UserStoarage.save(client);
            return response;
        }
        catch(err){
            return {success: false, msg: err};
        }
    }
}

module.exports = User;