var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Ola Mundo');
}).listen(3000);

console.log('servidor rodando');