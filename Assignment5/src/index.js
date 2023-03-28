var http = require("http");

const httpServer = http.createServer(handleServer);
let PORT = 8081;

function handleServer(req, res) {
    let {url} = req;
    if(url === '/welcome'){
        res.writeHead(200, {"content-Type" : "text/plain"});
        res.write(" Welcome to Dominos")
        res.end();
    }
    else if(url == "/contact"){
        res.writeHead(200, {"content-Type" : "text/plain"})
        res.end(
            JSON.stringify({  
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
           })
           )
    }
    else{
        res.end("Invalid request")
    }
}


httpServer.listen(PORT, ()=>{
    console.log(`App running successfully on ${PORT}` )
})
module.exports = httpServer;