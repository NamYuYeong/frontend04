const math = require('./modues/math');
//math = {add, sub}

console.log(math.add(1, 2));
console.log(math.sub(3, 2));

const {sub, add} = require('./modues/math');

console.log(math.add(1, 2));
console.log(math.sub(3, 2));

const{mod} = require('./modues/math');
console.log(mod(50,9));
//필요한 기능만 꺼내올수도 있음