const fs=require('fs');
const fs1=require('fs').promises;

function dataWrite(){
    let statusmsg="";
    try{
        fs.writeFileSync('studentdata.txt',"welcome to FS module in Node")
        console.log("Data Written Successfully");
        statusmsg="Data Written Successfully";
    }catch(err){
        console.log(err);
        statusmsg="err";
    }
    return statusmsg;
}

module.exports=dataWrite;