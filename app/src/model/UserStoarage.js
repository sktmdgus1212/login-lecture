"use strict"

const { query } = require("express");
//const fs = require("fs").promises;
const db = require("../config/db.js");

class UserStorage{

    // static #getUsers(data, isAll, fields){
    //     const users = JSON.parse(data);
    //     if(isAll){
    //         return users;
    //     }
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if(users.hasOwnProperty(field)){
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // }

    // static #getUserInfo(data, id){
    //     const users  = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const userKeys =Object.keys(users);
    //     const userInfo = userKeys.reduce((newUser, info) =>{
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});
    //     return userInfo
    // }

    static getUsers(isAll, ...fields){
        // return fs.readFile("./src/databases/users.json")
        // .then((data) => {
        //    return this.#getUsers(data, isAll, fields); 
        // })
        // .catch((err) => console.error(err));
    }

    static getUserInfo(id){
        // //const users = this.#users;
        // return fs.readFile("./src/databases/users.json")
        // .then((data) => {
        //    return this.#getUserInfo(data, id); 
        // })
        // .catch((err) => console.error(err));
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) =>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        // const users = await this.getUsers(true); //모든 값을 가져옴
        // if(users.id.includes(userInfo.id)){
        //     throw "이미 존재하는 계정입니다.";
        // }
        // users.id.push(userInfo.id);
        // users.psword.push(userInfo.psword);
        // users.name.push(userInfo.name);
        // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        // return {success: true}
        return new Promise((resolve, reject) =>{
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) =>{
                if(err) reject(`${err}`);
                resolve({success: true});
            });
        });
    }
}

module.exports = UserStorage;