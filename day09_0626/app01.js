//apploication app
// expreses => 함수들의 모음 => 미들웨어

//http포함하고 있음
//미들웨어 (함수) : get, post, put, delte, set, use
// set: 기본정의, 뷰엔진 정의


const express = require('express');
const app = express(); // 서버만들준비완료 const server = http.createServer();
// const PORT = 3000;
app.set('PORT', 3000);
// app.use('필요한내용 등록')


app.get('/', (req,res)=>{
    console.log('get method')
})
app.post('/', (req,res)=>{
    console.log('host method')
})
app.delete('/', (req,res)=>{
    console.log('delete method')
})
app.put('/', (req,res)=>{
    console.log('put method')
})

app.listen(app.get('PORT'), ()=>{
    console.log(`server running on port ${app.get('PORT')}`);
})
// app.listen(PORT, ()=>{
//     console.log(`server running on port ${PORT}`);
// })