const fs = require('fs');

if(!fs.existsSync('myfolder'))
fs.mkdir('myfolder',(error)=>console.log(err))

if(fs.existsSync('myfolder'))
fs.rmdir('myfolder',(error)=>console.log(err))