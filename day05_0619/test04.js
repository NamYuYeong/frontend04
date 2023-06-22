//nodejs <-> js
//npm 프로그램 설치 도구 : package 매니져 역할
//http 모듈 내장하고 있음 : 서버를 만들수 있음

const http = require('http');
const fs = require('fs'); //파일 불러오기
const fsProminses = fs.promises;

// page가 매우 크면  효율적이지 못함 문자열로 모두 처리할순 없음
/*
const server = http.createServer((request, response) => {
  fs.readFile('./test01.html','utf-8',(err, data)=>{
    console.log(data);
    response.statusCode = 200;
    response.setHeader('content-type', 'text/html');
    response.write(data);
    response.end(); //다보냈음
  })
});
*/
const server = http.createServer((request, response) => {

    // const data = fsPromises.readFile('./test01.html');

    //promises => 처리 한단계 필요

    // const data = fs.readFileSync('./test01.htm1');
    const data = html('korea_it');
    // console.log ( data );

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(data);
    response.end();
});
// sudo pm i nodemon -g;
const PORT = 3000;
server.listen(PORT, () => {

    console.log('listening PORT ', PORT);
})