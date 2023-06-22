const fs = require('fs');
//파일읽기, 쓰기
//폴더만들고 지우기

//폴더 만들기
//  fs.mkdir('./newDir',(err)=>{
//      console.log(err);
//  })

// //폴더지우기
// fs.rmdir('./newDir',(err)=>{
//     console.log(err);
// })


process.on('mkdir', () => {
    console.log('폴더생성완료')
});

process.on('rmdir', () => {
    console.log('폴더삭제완료')
});


setTimeout(() => {
    fs.mkdir('./newDir', (err) => {
        console.log(err);
    })
    process.emit('mkdir')
}, 3000);

setTimeout(() => {
    fs.rmdir('./newDir', (err) => {
        console.log(err);
    })
    process.emit('rmdir')
}, 3000);