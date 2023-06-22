//eventemitter : dom 없으니 클릭 불가, 시스템끼리 서로 데이터 주고 받는 이벤트
//node가 event 사용하는 방법
// const EventEmitter = require('events');
// const myEvent = new EventEmitter();
//pocess는 EventEmitter를 상속 받음

process.on('hello', () => {
    console.log('hello event J');
})

process.on('js', () => {
    console.log('js event발생');
})

process.on('bye', () => {
   const err =new Error
})


process.emit('hello');
process.emit('javascript');
process.emit('bye');

process.on('exit',()=>{
    console.log('process종료')
})

//에러가 발생헸을때 이벤트 uncaughtException
process.on('uncaughtException', (err)=>{
    console.log(err);
    process.exit(1);
})
