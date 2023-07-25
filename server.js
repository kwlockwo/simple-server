const port = 5050;
const http = require('http');

const server = http.createServer(function (req, res) {
    if(req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });   
        res.write('<html><body><p>Home Page</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(port);
console.log('Node.js web server at port 5000 is running..')