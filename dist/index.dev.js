'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
  var now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon,07 Jan 2036 00:00:00 GMT;');
  res.end(req.headers.cookie);
});
var port = 8000;
server.listen(port, function () {
  console.info('Listening on ' + port);
});