// 회원가입
// /register/get
// /register/post
// /register/confirm : post(기본), get 
// /register/delete
// /register/put

//로그인
// /login/post
// /logout/ get 또는 post

//장바구니, product
// /product/get
// /product/get/list
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
app.use('/product', express.static(path.join(__dirname,'model')));

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

//error 제어 아직안함

app.post('/register',(req,res)=>{
    const newUser= req.body;
    const rows = fs.readFileSync(path.join(__dirname,'model', 'users.json')); //읽고
    console.log(rows);
    const users = JSON.parse(rows);

    const id = users[users.length - 1].id +1;
    //users.length - 1 : 마지막 데이터 인덱스
    //users[users.length - 1] : 마지막 데이터

    const inputUser = {id , ...newUser} // id 속성을 맨앞에 추가
    //  const inputUser = {...newUser, ㅑㅇ}
    newUser.id = id;
    console.log("newUser: ", inputUser);

    users.push(inputUser); //읽은데이터 넣기

    //넣어진데이터 쓰기 / 기존에 id,email이있다면 중복데이터로 처리불가
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

//login화면
app.get('/login',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname,'views', 'login.html'))
    }catch(err){
        console.log(err);
        res.status(500).send({success:false, message: '내부적오류'})
    }
})

//로그인 버튼 클릭시
//DB에 id, pwd 가 존재하면 로그인 아니면, err 처리
app.post('/login',(req,res)=>{
    const user =req.body;
    const {user_id, user_pwd } =req.body

    try{
        const rows = fs.readFileSync(path.join(__dirname, "model", "users.json"));
        const users = JSON.parse(rows);

        const find = users.find(data=>data.user_id === user.user_id && data.user_pwd === user_pwd);
        if(find){
            res.send({success: true, message: user_id})
        }else{
            res.send({success: false, message: "사용자를 찾을 수 없습니다."})
        }
    }catch(err){
        console.log(err);
        res.status(500).send({success:false, message: '내부적오류'})
    }
})

//logout
app.post('/logout',(req,res)=>{
    
})

//product
app.get('/product',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname,'views', 'product.html'))
    }catch(err){
        console.log(err);
        res.status(500).send({success:false, message: '내부적오류'})
    }
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