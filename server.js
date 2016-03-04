var http = require('http');
http.createServer(function(request, response) {
	response.writeHeader('Content-Type', 'text/plain');
	response.write('Hello world');
	response.end();
}).listen(5000);
