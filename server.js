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
   console.log('something')
  var body = '';
  req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
      console.log(JSON.parse(body)['note_text']);
      res.end('ok');
  });
 console.log(body);
 };
// if(req.params('note_text', false)) {
//   var noteValue = req.params('note_text')
//   console.log(noteValue)
// } else {
//   console.log("this would be get request response")
// }

//  let dataObj = { id: 123, name: "Bob", email: "bob@work.org" };
//  let data = JSON.stringify(dataObj);
//  res.end(data);
//  let path = url.parse(req.url, true);

//  res.writeHead(200,'OK', {'Content-Type':'text/plain'});
//  res.write('This is the response\n\n');
//  res.end('end of message to browser');
});

server.listen(1234, function() {
  console.log("Listening on port 1234");
});