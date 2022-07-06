"use strict"

class UserStorage{
    static #users = { //private
        id: ["sktmdgus", "ingyu", "skdlsrb"],
        psword: ["1234", "1234", "123456"],
        name: ["naingyu", "naseunghyun", "kimminseob"]
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

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
        return {success: true};
    }
}

module.exports = UserStorage;