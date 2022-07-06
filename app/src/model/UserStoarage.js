"use strict"

class UserStorage{
    static #users = { //private
        id: ["sktmdgus", "ingyu", "skdlsrb"],
        psword: ["1234", "1234", "123456"],
        nams: ["naingyu", "naseunghyun", "kimminseob"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, filed) =>{
            if(users.hasownProperty(field)){
                newUsers[field] = users[field]; //colloect field you want
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;