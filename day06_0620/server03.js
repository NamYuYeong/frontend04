//http모듈을 이용해서 서버를 구동시켜보세여

const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');

const server = http.createServer();
server.on('request', async (req, res) => {
    let filePath = path.join(__dirname, 'views', req.url === '/' ? 'index.html' : req.url);
    //console.log(filePath); 모든 요청 출력

    let contentType= 'text/html;charset=utf8'; //undefinde; =>error
    let extname = path.extname(filePath);


    switch (extname) {
        case '.html': contentType = 'text/html;charset=utf8'; break;
        case '.css': contentType = 'text/css'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.png': contentType = 'image/png'; break;
        case '.gif': contentType = 'image/gif'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.json': contentType = 'applicaton/json'; break;
        case '.mp3': contentType = 'audio/mp3'; break;
        case '.mp4': contentType = 'video/mp4'; break;
        default: contentType = "text/plan"
    }
    try {
        
        //localhost:3000=>wiews/index.html
        if (req.url === '/' && req.method === 'GET') {
            const data = await fs.readFileSync(path.join(__dirname, 'views', 'index.html'));
            res.write(data);
            res.writeHead(200, { 'Content-type': contentType });

            //localhost:3000=>views/index.html
        } else if (req.url === '/swap' && req.method === 'GET') {
            const data = await fs.readFileSync(path.join(__dirname, 'views', 'ha-swap.html'));
            res.write(data);
            res.writeHead(200, { 'Content-type': contentType });

            //localhost:3000=>subdir/index.html
        } else if (req.url === '/subdir' && req.method === 'GET') {
            const data = await fs.readFileSync(path.join(__dirname, 'views', 'index.html'));
            res.write(data);
            res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' });
        }else if (req.url.includes('/images') && req.method === 'GET') {
            // const data = await fs.readFileSync(path.join(__dirname, 'views', 'index.html'));
            // res.write(data);
            res.writeHead(200, { 'Content-type':contentType });
        }

    } catch(err) {

    }

    res.end();
})

server.listen(PORT, () => {
    console.log('listing PORT', PORT);
})

/*
다양한 url
localhost:3000 => views/index.html
localhost:3000/swap => views/swap.html
localhost:3000/subdir => subdir/index.html

*/