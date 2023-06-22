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
        case '.txt': contentType = "text/plan"
    }

    try {
        
        //localhost:3000=>wiews/index.html
        if (req.url === '/user' && req.method === 'GET') {
            const user = {
                firstname :'gildong',
                lastname : 'hong'
            }
            res.writeHead(200, { 'Content-type': contentType });
            //res.write(JSON.stringify(user));
            res.end(JSON.stringify(user));

            //localhost:3000/users
        } else if (req.url === '/users' && req.method === 'GET') {
            const data = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
           
            res.writeHead(200, { 'Content-type': contentType});
            res.end(data); //읽어온 자체가 문자열로 읽어 왔으므ㅡ로 전환이 필요 없음

            //localhost:3000/name/lastname=kim
        } else if (req.url.includes('/name') && req.method === 'GET') {
            const data = await fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
            const users = JSON.parse(data);
            console.log(users);
             /*
                    [
                    { first_name: 'jemicom', last_name: 'kim' },
                    { first_name: 'korea', last_name: 'park' }, 
                    { first_name: 'gildong', last_name: 'hong' }
                    ]
            */

            const nameAry = req.url.split('/'); //length = 3
            console.log(nameAry); 

            const name = nameAry[nameAry.length -1].split('=');
            console.log(name)

            const find = users.find(user => user.last_name === name);
            console.log(find)

            //find =  undefined = false = null = NaN = 0
            if(!find){
                const err = {
                    message : "Name not found"
                }
                res.end( JSON.stringify(err))
            }
            
            res.writeHead(200, { 'Content-type': contentType});
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