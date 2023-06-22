const fs = require('fs');
 //front : 파일읽기  =>fetch
const path = require('path');



// fs.readFile('./datas/lorem.txt',(err, data)=>{
//     if(err) consolog.error(err);

//     console.log(data);
//     console.log(data.toString());
// });


fs.readFile('./datas/lorem.txt','utf-8',(err, data)=>{
        if(err) consolog.error(err);
        console.log(data);
        
    });
//__dirname : 현재디렉토리

// const readPath = path.join(__dirname+ 'datas', 'lorem.txt');
// console.log(readPath);

// fs.readFile(readPath, 'utf-8',(err, data)=>{
//             if(err) consolog.error(err);
//             console.log(data);
            
//         });

// const readJson = path.join(__dirname + 'datas', 'user.json');

// fs.readFile(readJson,(err, data)=>{
//             if(err) consolog.error(err);
//             console.log(data); //Buffer
//             console.log(data.toString()); //문자열 그대로 읽기

//             const user = JSON.parse(data);
//             console.log(user);
//         });