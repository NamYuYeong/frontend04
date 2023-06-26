// 회원가입
// /register/post
// /register/confirm : post(기본), get 
// /register/delete
// /register/put

//로그인
// /login/post

//장바구니, product
// /product/get
// /product/post
// /product/delete
// /product/put

const exp = require('constants');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000;

app.use(express.static('/public')); //공유폴더지정
app.use(express.json()) //json 포맷 사용
app.use(express.urlencoded({extended:false})); //form 데이터 읽기

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

//register
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','register.html'));
})
app.get('/register/confirm',(req,res)=>{
    
})
app.post('/register',(req,res)=>{
    const newUser= req.body;
    const rows = fs.readFileSync(path.join(__dirname,'model', 'users.json')); //읽고
    console.log(rows);
    const users = JSON.parse(rows);

    users.push(newUser); //읽은데이터 넣기

    //넣어진데이터 쓰기 기존에 id,email이있다면 중복데이터로 처리불가 넣기
    fs.writeFileSync(path.join(__dirname, 'model','users.json'),
    JSON.stringify(users, null, "    "),
    'utf-8',
    err=> console.error(err)
    )
    const res_message = {
        success : 'ok',
        message : '회원가입 완료'
    }
    res.send(res_message);
})
app.delete('/register',(req,res)=>{
    
})
app.put('/register',(req,res)=>{
    
})

//login
app.post('/register/login',(req,res)=>{
    
})

//product
app.get('/product',(req,res)=>{

})
app.post('/product',(req,res)=>{
    
})
app.delete('/product',(req,res)=>{
    
})
app.put('/product',(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log('litening port', PORT);
})