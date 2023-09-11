const port = 5050;
const http = require('http');


const requestListener = function (req, res) {
    console.log(JSON.stringify(req.headers));
    if(req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });   
        res.write('<html><body><p>Home Page</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
}

const server = http.createServer(requestListener).listen(port);

console.log(`Node.js web server at port ${port} is running..`);
