//nodejs <-> js
//npm 프로그램 설치 도구 : package 매니져 역할
//http 모듈 내장하고 있음 : 서버를 만들수 있음

const http = require('http');
const str = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>응답</h1>
</body>
</html>
`
// page가 매우 크면  효율적이지 못함 문자열로 모두 처리할순 없음

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/html');
    response.write(str);
    response.end(); //다보냈음
});
const PORT = 3000;
server.listen(PORT, () => {

    console.log('listening PORT ', PORT);
});