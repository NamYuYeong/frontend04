//숫자인지 확인하는함수
const isNumber = (num) => {
    if (Number.isNaN(num))
        console.log("true")
    else {
        // console.log("faluse");//숫자
        return !Number.isNaN(num);
    }
} //숫자면 t 아니면 f
const add = (num1, num2) => {
    if (!(isNumber(num1) && isNumber(num2))) {
        return '숫자를 입력하세여ㅡㅡ'
    } return num1 + num2;
}

const sub = (num1, num2) => {
    if (!(isNumber(num1) && isNumber(num2))) {
        return '숫자를 입력하세여ㅡㅡ'
    } return num1 - num2;
}

const mul = (num1, num2) => {
    if (!(isNumber(num1) && isNumber(num2))) {
        return '숫자를 입력하세여ㅡㅡ'
    } return num1 * num2;
}

const div = (num1, num2) => {
    if (!(isNumber(num1) && isNumber(num2))) {
        return '숫자를 입력하세여ㅡㅡ'
    } return num1 / num2;
}

const mod = (num1, num2) => {
    if (!(isNumber(num1) && isNumber(num2))) {
        return '숫자를 입력하세여ㅡㅡ'
    } return num1 % num2;
}

module.exports= {add, sub, mul, div, mod};
// console.log(add(9, 10));
// console.log(add(9, 'abc'));