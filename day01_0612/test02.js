// 디스트럭쳐링 객체나 오브젝트에 쓰이는 문법
// 배열, 오브젝트의 데이터구조를 깨서 내가 필요한값으로 변환하는 문법

let ary = [1,2,3];
// let one = ary[0];
// let two = ary[1];
// let thr = ary[2];

let [one ,two, thr]= ary;
//순차적으로 꺼냄 이터러블

console.log(one, two, thr);

const user = {
    name : 'nam',
    age : 27,
    subject : 'nodejs'
}

// let name = user.name;
// let age = user.age;
// let subject = user.subject;

const {name, age, subject} = user;
//객체는 순사가 없으므로 같은 속성명으로 꺼내옴
console.log(name, age, subject);