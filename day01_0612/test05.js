// ... spread(전개)연산자
// 구조를 깨서 펼치는 용도

console.log([1,2,3]);
console.log(...[1,2,3]);

console.log('hello');
console.log(...'hello');

const ary = [1,2,3];
//최대값구하기
//math.max(1,2,3)
let maxNum =0;
ary.forEach(data=> {
    if(maxNum <= data){
        maxNum= data;
    }
})
console.log(maxNum);

const maxNum2 = Math.max(...ary)
console.log(maxNum2);


// function spreadHandle(rest){
//     rest[0]='hello'
//     console.log(rest); //[1,2,3];
// }
// // spreadHandle(...ary);
// // console.log(ary);

function spreadHandle(...rest){
    rest[0]='hello'
    console.log(rest); //[1,2,3];
}
spreadHandle(...ary);
console.log(ary);

const twoAry = ary;
const thrAry =[...ary];
ary[0]='javascript'
console.log(twoAry);
console.log(thrAry);
// console.log(ary);
console.log(twoAry=thrAry);