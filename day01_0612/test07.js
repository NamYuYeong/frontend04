//module 가져오기
const {userName, user} = require('./module.js');
console.log(userName, user);

const {userName : un, user : u} = require('./module.js');
console.log(un, u);