//http모듈을 이용해서 서버를 구동시켜보세여

const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');

const server = http.createServer();
server.on('request', async (req, res) => {
    //처리할일
    console.log(req.method, req.url)

    if (req.method === 'GET') {
        const data = await fs.readFileSync(path.join(__dirname,'views','index.html'));
        res.writeHead(200, { 'Content-type': 'text/html;charser=utf-8' });
        res.write(data);
        res.end();
    } else if(req.method === 'POST'){
        res.writeHead(200, { 'Content-type': 'text/html;charser=utf-8' });
        res.write(JSON.stringify({message:'요청method :POST'}));
        res.end();
    }else if(req.method === 'DELETE'){
        res.writeHead(200, { 'Content-type': 'text/html;charser=utf-8' });
        //res.write('요청method :DELETE')
       // const {user} = req.body
        // req.prams
        // req.query
        // req.header
        res.write(JSON.stringify({response: '삭제' }));
        res.end();
    }else if(req.method === 'PUT'){
        res.writeHead(200, { 'Content-type': 'text/html; charser=utf-8' });
        res.write(JSON.stringify({response: '수정' }));
        res.end();
    }

})

server.listen(PORT, () => {
    console.log('listing PORT', PORT);
})

/*
요청 테스트 도구
THUNDER CLIENT
POSTMAN,
ISOMNIA
*/