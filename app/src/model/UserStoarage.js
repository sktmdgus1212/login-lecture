"use strict"

class UserStorage{
    static #users = { //private
        id: ["sktmdgus", "ingyu", "skdlsrb"],
        psword: ["1234", "1234", "123456"],
        nams: ["naingyu", "naseunghyun", "kimminseob"]
    };

    
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys =Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;