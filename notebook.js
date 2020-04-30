const { Client } = require('pg')

//Then create an instance of the client class with the correct data.
const client = new Client({
  user: 'FayeCarter',
  host: 'localhost',
  database: 'notes',
  password: null,
  port: 5432,
})

client.connect()


function Notebook() {
    this.thingsToRemember = []
}

Notebook.prototype.makeNote = function(noteContents) {
    client.query("INSERT INTO notes (content) VALUES ('"+ noteContents +"');", (err, res) => {
        client.end() 
    })
}

Notebook.prototype.getNotes = function() {
    client.query('SELECT * FROM notes', (err, res) => {
        for (var i = 0; i < res.rows.length; i++) {
            console.log(res.rows[i].content)
        }
        client.end()
    })
}

