//nodejs <-> js
//npm 프로그램 설치 도구 : package 매니져 역할
//http 모듈 내장하고 있음 : 서버를 만들수 있음

const http = require('http');
const PORT = 3000;

// const users = [
// {firstname: "y",
// lastname:  "n"}

// ]

// const server = http.createServer((request,Response)=>{
//     response.statusCode=200;
//     response.setHeader('Content-type','application/json');
//     // response.write(JSON.stringify(user));
//     // resoponse.end();

//     response.end(JSON.stringify(users));

// })
const fs = require('fs');
const fsProminses = fs.promises;

/*const server = http.createServer((request,response)=>{
        response.statusCode=200;
        response.setHeader('Content-type','application/json');
        // response.write(JSON.stringify(user));
        // resoponse.end();
        // const data =fsProminses.readFile('./users.json', 'utf-8');
        const data =fs.readFileSync('./users.json');

        response.end(data);
    
    })
*/
const server = http.createServer(async(request,response)=>{
    response.statusCode=200;
    response.setHeader('Content-type','application/json');
    // response.write(JSON.stringify(user));
    // resoponse.end();
    // const data =fsProminses.readFile('./users.json', 'utf-8');
    const data = await fsProminses.readFile('model/users.json', 'utf-8');
    // const data = fs.readFileSync('./users.json');
    await fs.writeFileSync('./my-data.txt', data);

    response.end(data);

})

server.listen(PORT, () => {
    console.log('listening PORT ', PORT);
})