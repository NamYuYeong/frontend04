const obj ={x:1, y:2};
const copyone = obj;
const copytwo = {...obj};
copyone.x = 'hello';

console.log(obj === copyone); //t
console.log(obj === copytwo); //f
console.log(obj); //{ x: 'hello', y: 2 }
console.log(copyone);//{ x: 'hello', y: 2 }
console.log(copytwo);//{ x: 1, y: 2 }

const merge = {a :3, b:4, ...obj};
console.log(merge);

//Object.keys(); 객체의 키값만 배열로 만듬
const keys =Object.keys(merge);
console.log(keys);//[ 'a', 'b', 'x', 'y' ]

//Object.value(); 객체의 밸류 값만 배열로만듬
const values =Object.values(merge);
console.log(values);//[ 3, 4, 'hello', 2 ]

//Object.entries(); {key:value}배열로 만듬
const entries =Object.entries(merge);
console.log(entries); //[ [ 'a', 3 ], [ 'b', 4 ], [ 'x', 'hello' ], [ 'y', 2 ] ]

//Object.assign(); 객체복사
const copyObj =Object.assign(merge);
console.log(copyObj === merge);
console.log(copyObj);
//다른주소를 사용해서 원본이나 사본이 수정되었을 때 서로 영향 없이 사용하도록 함
//얕은 복사:영향이 있음

copyObj.a ='javascript';
console.log(merge);
//영향이 없도록 하기위한 모듈 사용:__lowdash