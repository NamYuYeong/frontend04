const EventEmitter = require('events');
const myEvent = new EventEmitter();

setTimeout(()=>{
    myEvent.emit('event01');
},3000) //3초 뒤에 이벤트 발생

setTimeout(()=>{
    myEvent.emit('event02');
},2000) //2초 뒤에 이벤트 발생

process.on('exit',()=>{
    console.log('exit bye');
}) //process: 노드의 현재실행중인 정보를 가지고있음
