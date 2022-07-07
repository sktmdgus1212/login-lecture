"use strict"

const fs = require("fs").promises;

class UserStorage{
       
    static getUserInfo(id){
        //const users = this.#users;
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
           return this.#getUserInfo(data, id); 
        })
        .catch((err) => console.error(err));
    }

    static #getUserInfo(data, id){
        const users  = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys =Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo
    }

    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //console.log(users);
        return {success: true};
    }
}

module.exports = UserStorage;