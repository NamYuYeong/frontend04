const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set('PORT', 3000);
app.use((req, res, next) => {
    console.log('method', req.method, 'url:', req.url);
    next();
})

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()); // post, get, put, delete 각종방식중 json형태의 데이터를 처라하도록 해주는 등록

app.get('/', (req, res) => {
    console.log('1.get');
    // res.send('문자열');
    // res.send('<h1>문자열</h1>')
    // res.send(JSON.stringify({"first_name": "hong"}))
    // res.json({"first_name": "gildong"})
    // res.sendFile(path.join(__dirname,'views', 'index.html'))// html 처리
    res.status(200).send('<h1>문자열</h1>');
})

app.get('/ha-swap', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ha_swap.html'))// html 처리
})

app.get('/subdir', (req, res) => {
    res.sendFile(path.join(__dirname, 'subdir', 'index.html'));
})
// app.get('/model',(req,res)=>{
//     const users = require('./model/users.json');
//     res.json(users);
// })
app.get('/model', (req, res) => {
    const users = fs.readFileSync('./model/users.json', "utf-8");
    res.send(users);
})

//localhost:3000/kim
app.get('/user/:user_id/:user_pwd', (req, res) => {
    const user = req.params;
    res.send(user);
})

//http://localhost:3000/customer/kim/test1
app.get('/customer/:user_id/:user_pwd', (req, res) => {
    const { user_id, user_pwd } = req.params;

    res.send({ user_id, user_pwd });

})

//  http://localhost:3000/customer
//  http://localhost:3000/user
// post 방식에서 속성을 읽어오도록 해주어야함
app.post('/', (req, res) => {
    const user = {
        user_id: req.body.user_id,
        user_pwd: req.body.user_pwd,
    };
    console.log(user);

    res.send(user)
})

app.post('/user', (req, res) => {
    const user = {
        user_id: req.body.user_id,
        user_pwd: req.body.user_pwd,
    };
    console.log(user);

    res.send(user)
})

app.delete('/', (req, res) => {
    const delUser = req.body;
    const response = fs.readFileSync('./model/users.json'); //읽고
    const users = JSON.parse(response);//배열로바꾸기
    const filter = users.filter(data => data.user_id !== delUser.user_id); //지우고

    //쓰고
    fs.writeFileSync('./model/users.json',
        JSON.stringify(filter, null, "     "),
        "utf-8",
        err => console.log(err)
    )
    //처리결과를 응답
    res.send({ success: true, message: delUser.user_id + '삭제' })

})
app.put('/', (req, res) => {
    console.log('4. put')
})

app.listen(app.get('PORT'), () => {
    console.log(`server running on port ${app.get('PORT')}`);
})
// app.listen(PORT, ()=>{
//     console.log(`server running on port ${PORT}`);
// })