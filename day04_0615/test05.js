const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, "datas", "wirteLorem.txt");
//쓰기할때 폴더 부정확하면 err

fs.writeFile(writePath,"data 쓰기", err=>{console.log(err)
    console.log("1.wirte");
});

//읽어와서 쓰기
const data = fs.readFile('./datas/lorem.txt','utf8',(err,data)=>{
    console.log("2", data);
});

fs.appendFile(writePath, data, err=>{
    console.log(err)
    console.log("3.wirte");
});

