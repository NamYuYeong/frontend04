const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');

const server = http.createServer();
server.on('request', async (req, res) => {
    let filePath = path.join(__dirname, 'views', req.url === '/' ? 'index.html' : req.url);

    // 수정
    let contentType = 'text/html;charset=utf-8';
    let extname = path.extname(filePath);

    switch (extname) {
        case '.css': contentType = 'text/css'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.png': contentType = 'image/png'; break;
        case '.gif': contentType = 'image/gif'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.json': contentType = 'application/json'; break;
        case '.mp3': contentType = 'audio/mp3'; break;
        case '.mp4': contentType = 'video/mp4'; break;
        case '.txt': contentType = "text/plan"
    }

    try {
        if( req.url === '/delete' && req.method === 'GET'){
            const data = await fs.readFileSync( path.join(__dirname, 'views', 'delete.html'));
            res.writeHead( 200, { 'Content-type' : contentType});
            res.write(data);
        }
       
        else if (req.url.includes('name') && req.method === 'DELETE') {
            let body = '';
            req.on('data', (chunk) => {
                body = chunk.toString();
                //안에서 처리 할 수 있음 
            })
            req.on('end', () => {
                const { first_name, last_name } = JSON.parse(body);
                // console.log(first_name, last_name);

                const response = fs.readFileSync(path.join(__dirname, 'model', 'users.json'))
                const users = JSON.parse(response);
                // const find = users.find(data=>data.first_name === first_name);
                // //넘겨온데이터 1개 찾기 find
                // console.log(find);

                // const filter = users.filter(data=>data.first_name !== first_name);
                // //여러개 데이터 찾기 filter  //!==삭제한 데이터를 리턴
                // console.log(filter);

                const find = users.find(data => data.first_name === first_name && data.last_name === last_name);
                const index = users.indexOf(find); //  배열에저장된번호
                // console.log(index);
                users.splice(index, 1);

                // console.log(users);


                    fs.writeFileSync(
                        path.join(__dirname, 'model', 'users.json'),
                        JSON.stringify(users, null, "     "),
                        "utf-8",
                        (err)=>{
                            console.log(err);
                        }
                        )
            })
            const content = {
                success : 'ok',
                message : '삭제되었습니다.'
            }
            res.end(JSON.stringify(content));

        }else if (req.url.includes('first') && req.method === 'DELETE'){
            const url = require('url');
            const queryUrl = url.parse(req.url);
            const query = queryUrl.query
            console.log("query", query); 

            const reqQuery = require('querystring');
            // const params = reqQuery.parse(query);
            // console.log(params);

            const {first, last} = reqQuery.parse(query);
            console.log()

            const response = fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
            users = JSON.parse(response);
            const filter = users.filter(data=>data.first_name!== first);

            fs.writeFileSync(
                path.join(__dirname, 'model', 'users.json'),
                JSON.stringify(filter, null, "     "),
                "utf-8",
                err=> console.log(err)
            )
            const message ={
                success : 'ok',
                message : '삭제되었습니다.'
            }

            
        }
    } catch (err) {
        console.log(err);
    }

    res.end();
})

server.listen(PORT, () => {
    console.log('listing PORT ', PORT);
})

/* 
다음주 : 
javascript : document.querySelector()
jQuey :      $()

node route 매우 불편 (99%)
express route
*/