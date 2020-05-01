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
    var notebook = new Notebook();
      notebook.makeNote(receivedNote);
      res.end('ok');
  });
 console.log(body);
 } else {
   console.log('here I would pass them all the note contents');
   let dataObj = { notes: ['note one','note two', 'note three with really long list of characters so that its shortened to twenty'] };
 let data = JSON.stringify(dataObj);
 res.end(data);
 };

});

server.listen(1234, function() {
  console.log("Listening on port 1234");
});

const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'FayeCarter',
    host: 'localhost',
    database: 'notes',
    password: null,
    port: 5432,

})

const client = new Client({
    //change depending on who's computer
    user: 'FayeCarter',
    host: 'localhost',
    database: 'notes',
    password: null,
    port: 5432,
})
  
function Notebook() {
    this.thingsToRemember = []
}

Notebook.prototype.makeNote = function(noteContents) {
    pool.query("INSERT INTO notes (content) VALUES ('"+ noteContents +"');", (err, res) => {
        pool.end() 
    })
}

Notebook.prototype.getNotes = function() {
client.connect()
    client.query('SELECT * FROM notes;', (err, res) => {       
        for (var i = 0; i < res.rows.length; i++) {
            this.thingsToRemember.push(res.rows[i].content)
        }
        client.end()
    });
}

Notebook.prototype.viewList = function() {
    return this.thingsToRemember
}
