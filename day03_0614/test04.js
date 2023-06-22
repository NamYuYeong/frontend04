const EventEmitter = require('events');
const myEvent = new EventEmitter();


//이벤트 처리
// document.addEventListener('click',()=>{})
const eventOff =()=>{
    console.log('event01발생')
}

myEvent.addListener('event01', eventOff);
// myEvent.off('event01', eventOff); //이벤트를 지워버려서 실행이안됨

setInterval(()=>{
    console.log('setInterval')
    myEvent.emit('event01');
},3000) //3초 뒤에 이벤트 발생

process.on('exit',()=>{
    console.log('exit bye');
}) //process: 노드의 현재실행중인 정보를 가지고있음

const count = myEvent.listenerCount("event01");
console.log(count);