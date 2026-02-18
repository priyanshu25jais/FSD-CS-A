const http = require('http');

const PORT = 4002;
const apidata = require('./apiCalling');
const dataWrite = require('./usefsmodule');

const server = http.createServer(async(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // res.setHeader('content-type', 'text/html');
    // res.end("<h2> Welcome to node Server </h2>");
    if(req.url =="/msg" && req.method=="GET"){
        res.setHeader("Content-Type", "text/html");
        res.end("<h2>Greeting of the day!!</h2>")
    }else if(req.url =="/data" && req.method=="POST"){
        res.setHeader("Content-Type", "application/json");
        const jsondata = {
            name: "Rahul",
            age: 25,
            city: "Delhi"
        }
        res.end(JSON.stringify({msg:jsondata}));
    }
    else if(req.url =="/data" && req.method=="GET"){
        res.setHeader("Content-Type", "application/json");
        const jsondata=await apidata();
        res.end(JSON.stringify({msg:jsondata}));
    }
    else if(req.url =="/datawrite" && req.method=="GET"){
        res.setHeader("Content-Type", "application/json");
        const jsondata=dataWrite();
        res.end(JSON.stringify({msg:jsondata}));
    }
    else{
        res.setHeader("Content-Type", "text/html");
        res.end("<h2>Page Not Found</h2>");
    }
})

server.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})