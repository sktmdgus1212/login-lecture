"use strict"
 //controller 분리

 const users = {
    id: ["sktmdgus", "ingyu", "skdlsrb"],
    psword: ["1234", "1234", "123456"],
 };

 //front
const output = {
    hello: (req, res) =>{
        //res.send();
        res.render("home/index");
    },
    login: (req, res) =>{
        res.render("home/login");
    }
}

//back
const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: false,
            msg: "fail login",
        });
    }
}

module.exports = { // 밖에서 사용하도록 내보냄
    output,
    process,
};
