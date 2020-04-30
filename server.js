const http = require("http");
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder;
const util = require('util')
const formidable = require('formidable')
const server = http.createServer(function(req, res) {
 res.setHeader("Content-type", "application/json");
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.writeHead(200); //status code HTTP 200 / OK

 let dataObj = { id: 123, name: "Bob", email: "bob@work.org" };
 let data = JSON.stringify(dataObj);
 res.end(data);
//  let path = url.parse(req.url, true);

//  res.writeHead(200,'OK', {'Content-Type':'text/plain'});
//  res.write('This is the response\n\n');
//  res.end('end of message to browser');
});

server.listen(1234, function() {
  console.log("Listening on port 1234");
});