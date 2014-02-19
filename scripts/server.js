var port = 8080;
console.log("starting http server http://localhost:" + port);
var connect = require('connect');
connect.createServer(
    connect.static(__dirname + '/../app/')
).listen(port);