const fs = require('fs');
//front : 파일읽기  =>fetch
const path = require('path');

//비동기처리 async
const data = fs.readFileSync('./datas/lorem.txt',
    'utf-8',
    err => console.log(err))

console.log("1", data);
console.log("2",'처리')
