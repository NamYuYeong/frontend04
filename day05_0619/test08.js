//
const {v4:uuid}= require('uuid'); //v4를 uuid로 바꿔서 쓰겟다
//uuid : math.random()처럼 난수 발생 모듈

// console.log(uuid());
// //log 유일화한 번호

for(let a=0; a<10; a++){
    console.log(uuid());
}