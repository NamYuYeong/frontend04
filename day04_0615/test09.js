//stream 처리 : buffer 직접 데이터를 읽고 쓰게 만들어주기

const fs = require('fs');
const readStream = fs.createReadStream('./datas/lorem100.txt');


// readStream.on('data', (chunk)=>{
//     console.log("----------------------new CHUNK-----------------------------")
//     console.log(chunk.toString());
// })

readStream.pipe(WriteStream);