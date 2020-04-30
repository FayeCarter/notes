const http = require("http");
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder;
const util = require('util')
const formidable = require('formidable')
const qs = require('querystring');
const server = http.createServer(function(req, res) {
 res.setHeader("Content-type", "application/json");
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.writeHead(200); //status code HTTP 200 / OK
 if (req.method == "POST") {
  var body = '';
  req.on('data', chunk => {
      body += chunk.toString();
  });
  req.on('end', () => {
    var receivedNote = JSON.parse(body)['note_text']
      console.log(receivedNote);
      res.end('ok');
  });
 console.log(body);
 } else {
   console.log('here I would pass them all the note contents')
 };

});

server.listen(1234, function() {
  console.log("Listening on port 1234");
});