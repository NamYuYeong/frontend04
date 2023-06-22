//http모듈을 이용해서 서버를 구동시켜보세여

const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');
const url = requier('url');

const server = http.createServer();
server.on('request', async (req, res) => {
    let filePath = path.join(__dirname, 'views', req.url === '/' ? 'index.html' : req.url);
    //console.log(filePath); 모든 요청 출력

    let contentType;
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
        case '.txt': contentType = "text/plan"
    }

    try {
        
        //localhost:3000=>wiews/index.html
        if (req.url.includes('/name') && req.method === 'GET') {
            const data = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
            const users = JSON.parse(data);
            
            //url
           
            const reqUrl = url.parse(req.url);
            const myurl = url.format(reqUrl);
            console.log(reqUrl.query);

            const query = requier('querystring');
            // const myQuery = query.stringify('lastname=you&op=test&html=tag');
            const myQuery = query.parse(reqUrl.query);
            console.log('myQuery:',JSON.stringify(myQuery));

            const find = users.find(user => user.lastname === myQuery.lastname);
            console.log(find)

            if(!find){
                const err={
                    message : "name not found"
                }
                res.end(JSON.stringify(err))
            }            
            res.writeHead(200, { 'Content-type': 'application/json'});
            res.end(JSON.stringify(find));
        }

    } catch(err) {
        console.log(err)
    }

    res.end();
})

server.listen(PORT, () => {
    console.log('listing PORT', PORT);
})

/*
다양한 url
localhost:3000/user => 한명
localhost:3000/users => 모든 user 표시
localhost:3000/users/name=kim =>이름이 김 인사람

*/