const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, "datas", "wirteLorem.txt");
//쓰기할때 폴더 부정확하면 err

fs.writeFile(writePath,"data 쓰기", err=>{console.log(err)
    console.log("1.wirte");
});

//읽어와서 쓰기 //callback
const data = fs.readFile('./datas/lorem.txt','utf8',(err,data)=>{
    console.log("2", data);

    //기존파일이 있으면 추가
    //없으면 만들어 추가, error없음
    fs.appendFile(writePath, data, err=>{
        console.log(err)
        console.log("3.wirte");
    });
    
});

fs.rename(
    path.join(__dirname, "datas","writelorem.txt"),
    path.join(__dirname, "datas","newName.txt"),
    (err)=>{
        console.log(err)
        console.log("4. rename");
    }
)

fs.appendFile(
    path.join(__dirname,'datas', 'append.txt'),
    "appand확인",
    (err)=>{
        console.log(err);
        console.log("5. appendFile")
    }
)