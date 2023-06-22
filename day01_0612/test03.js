//배열
const [a,b]=[1,2];
console.log(a,b); // 1,2

const [c,d]=[3];
console.log(c,d); 
// 3 undefined

const [e,f]=[4,5,6];
console.log(e,f);

const [g, ,i]=[7,8,9];
console.log(g,i);

const [j=99,k,l=12]=[10,11];
console.log(j,k,l);
// 기본값은 전달되는 값이 없으면 사용하지만 전달되는 값이 있으면 전달되는 값을 사용

const [m,...other]=[4,5,6];
console.log(e, other);
//... : 1)나머지 연산자, 2)스프레드연산자