const port = process.env.PORT || 5050;
const http = require('http');
const service = process.env.RENDER_SERVICE_NAME || 'Simple-Server';

const requestListener = function (req, res) {
    console.log(JSON.stringify(req.headers));
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if(req.url == '/') {
        res.removeHeader('rndr-id');
        res.writeHead(200, { 'Content-Type': 'text/html', 'X-Service': service });
        res.write('<html><body><p>Home Page</p></body></html>');
        res.end();
    }
    else if(req.method === 'POST' && url.pathname === '/log') {
        const params = Object.fromEntries(url.searchParams);
        console.log('POST /log params:', JSON.stringify(params));
        res.writeHead(200, { 'Content-Type': 'application/json', 'X-Service': service });
        res.end(JSON.stringify({ received: params }));
    }
    else
        res.end('Invalid Request!');

    console.log(JSON.stringify(res.headers));
}

const server = http.createServer(requestListener).listen(port);

console.log(`Node.js web server at port ${port} is running..`);

console.error('All environment variables:', Object.keys(process.env).sort());

const fooEnvVar = process.env.FOO;
console.error('Specific environment variables set:', {
    hasFooEnvVar: !!fooEnvVar
});
