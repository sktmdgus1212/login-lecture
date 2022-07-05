"use strict"
//dom을 통해 html의 데이터를 js로 제어

const id = document.querySelector("#id"); //html id="id" 불러옴
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    }
    console.log(req);
}