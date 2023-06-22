const fs = require('fs');
 //front : 파일읽기  =>fetch
const path = require('path');

const data = fs.readFile('./datas/lorem.txt', 'utf-8', (err, data)=>{
    if(err) consolog.error(err);
    console.log(data);
    
});
console.log('콘솔 제일 먼저 처리')
console.log(data);