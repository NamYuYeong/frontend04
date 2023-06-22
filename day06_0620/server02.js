//http모듈을 이용해서 서버를 구동시켜보세여

const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');

const server = http.createServer();
server.on('request', async (req, res) => {
    let filePath = path.join(__dirname, 'views', req.url === '/' ? 'ha_swap.html' : req.url);
    //console.log(filePath); 모든 요청 출력

    let contentType = 'text/html;charset=utf-8';
    let extname = path.extname(filePath);
    // console.log(extname, contentType); //확장자 정보 확인

    // if (extname === '.css') {
    //     contentType = 'text/css'
    // }else if (extname === '.jpg') {
    //     contentType = 'image/jpg'
    // }

    switch(extname){
        case '.css': contentType = 'text/css'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.png': contentType = 'image/png'; break;
        case '.gif': contentType = 'image/gif'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.json': contentType = 'applicaton/json'; break;
        case '.mp3': contentType = 'audio/mp3'; break;
        case '.mp4': contentType = 'video/mp4'; break;
        default : contentType= "text/plan"
    }

    console.log(req.url, contentType); //확장자 정보 확인

    const data = await fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-type': contentType });
    res.write(data);
    res.end();
})

server.listen(PORT, () => {
    console.log('listing PORT', PORT);
})

/*
콘텐츠 처리
html
json
*/