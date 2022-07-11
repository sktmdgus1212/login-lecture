"use strict"

const cli = require("nodemon/lib/cli");
const UserStoarage = require("./UserStoarage");

class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body;
        try{
            const user = await UserStoarage.getUserInfo(client.id);
            if(user){
                if(user.id === client.id && user.psword === client.psword){
                    return {success: true};   
                }
                return {success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return {success: false, msg: "존재하지 않는 계정입니다."};
        }
        catch(err){
            return {success: false, err};
        }
            
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStoarage.save(client);
            return response;
        }
        catch(err){
            return {success: false, err};
        }
    }
}

module.exports = User;