//비동기처리는 async
//try{ }catch()finally{} //반드시 에러처리가 들어가야함

const fs = require('fs');
const fspromises = require('fs').promises;
const path = require('path');

const fileOption = async () => {
    try {
        const data = await fspromises.readFile('./datas/lorem.txt', 'utf-8');
        //await반드시 기다렷다가 실행 async 처리된 함수에서만 사용

        console.log("1. readfile", data);
        console.log("2. console.log");

        await fspromises.writeFile('./datas/newWrite.txt', data);
        console.log('3.write complete')

        await fspromises.appendFile("./datas/newWrite.txt", "append txt");
        console.log('4.appendFile');

        await fspromises.rename("./datas/newWrite.txt", "./datas/rename.txt", err =>
            console.log(err))
        console.log('5. rename');


        if (!fs.existsSync("./model")) {
            fs.mkdir("./model", err => { if (err) throw err });
        }
        console.log("6. mkdir")

        //    fs.readFile('./', (err,filelist)=>{

        //     })

        const filelist = await fspromises.readdir('./', err => { if (err) throw err })
        console.log("7.", filelist);

        await fspromises.unlink(path.join(__dirname, "datas", "rename.txt"));
        console.log("8. unlink");

    } catch (err) {
        console.log(err);

    } finally {
        //try코드테서 에러가 없이도 반드시 실행
        //catch구문이 실행이돼도 반드시 처리

        console.log("finally 반드시 실행");
        //db.close 넣어줌

    }
}

fileOption();
