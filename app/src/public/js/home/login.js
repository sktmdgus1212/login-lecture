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
    //console.log(req);
    //console.log(JSON.stringify(req));
    fetch("/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
       if(res.success){
           location.href = "/"; //링크 이동
       }
       else{
           alert(res.msg);
       }
    })
    .catch((err) =>{
        console.log(new Error("로그인 중 에러 발생"));
    })
}
