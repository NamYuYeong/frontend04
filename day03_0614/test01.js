const EventEmitter = require('events');
const myEvent = new EventEmitter();

//이벤트 처리
// document.addEventListener('click',()=>{})
myEvent.addListener('event01',()=>{
    console.log('event01 발생')
    //어떤 처리하기
})
myEvent.on('event02',()=>{
    console.log('event02 발생')
    //어떤 처리하기
})


myEvent.emit('event01'); //이벤트 발생
myEvent.emit('event02'); //이벤트 발생

setTimeout(()=>{
    myEvent.emit('event01');
},3000) //3초 뒤에 이벤트 발생

setTimeout(()=>{
    myEvent.emit('event02');
},2000) //2초 뒤에 이벤트 발생

process.on('exit',()=>{
    console.log('exit bye');
}) //process: 노드의 현재실행중인 정보를 가지고있음


myEvent.listenerCount('event01'); //이벤트가 몇번쓰였는지