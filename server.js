const http =  require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);  

    //set header content type
    res.setHeader('Content-Type', 'text/plain');
    res.write("hello, geralt");
    res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log("listening to the request on the port 3000");
});