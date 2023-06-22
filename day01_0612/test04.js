const user ={
    firstname: 'nam',
    lastname: 'yeong'
}
const {firstname, lastname} =user;
console.log(firstname,lastname);

const {firstname:fn, lastname : ln} =user;
console.log(fn,ln);

const{
    firstname :fname="hello",
    lastname : lname,
    age=30
}=user;

const userTwo={
    firstname: 'korea',
    address : {
        zipcode:'08032',
        city: 'seoul'
    }
}
const {address}=userTwo;
console.log(address);//{ zipcode: '08032', city: 'seoul' }

const{address:{city}}=userTwo;
console.log(city); //seoul

const {x, ...rest}={x:1, y:2, z:3};
console.log(x, rest); // 1 { y: 2, z: 3 }