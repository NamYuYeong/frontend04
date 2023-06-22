//nodejs <-> js
//npm 프로그램 설치 도구 : package 매니져 역할
//http 모듈 내장하고 있음 : 서버를 만들수 있음

const http = require( 'http');
const server = http.createServer((request, response)=>{
    response.statusCode =200;
    response.setHeader('content-type', 'text/html');
    response.write('<h1>응답</h1>')
    response.end(); //다보냈음
});
const PORT = 3000;
server.listen(PORT, ()=>{

console. log('listening PORT ', PORT);
});