var http = require('http');
var url = require('url');
var queryString = require("querystring");
var httpServer = http.createServer(function (req, res) {
  console.log(url.parse(req.url).path);
  console.log(url.parse(req.url).query);
  query = url.parse(req.url).query;
  params = queryString.parse(query);
  console.log(params['nom']);
  nom = params['nom'];
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end("<h2>Bonjour Mr " + nom + "</h2>");
});
httpServer.listen(3000, function () {
  console.log("Node server started");
});