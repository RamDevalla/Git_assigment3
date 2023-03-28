const http = require("http");
const fs = require("fs");
let PORT = 5000;
let fileContent = `<div> <h1> Hello World </h2> <p> This is my name : "Ravi" </div>`
fs.writeFile("index.html", fileContent, function(err){
    if(err) throw err;
    console.log("Saved....!")
})


const server = http.createServer((Req, Resp)=>{
    // console.log(Req);
    Resp.end(fileContent)
});

server.listen(PORT, ()=>{
    console.log("BAckend app running successfully on 5000 port")
})