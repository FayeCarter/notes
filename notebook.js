const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'macbookpro',
    host: 'localhost',
    database: 'notes',
    password: null,
    port: 5432,

})

function Notebook() {
    this.thingsToRemember = []
}

(Notebook.prototype.makeNote = function(noteContents) {
    pool.query("INSERT INTO notes (content) VALUES ('"+ noteContents +"');", (err, res) => {
        pool.end() 
    })
})("Alan")


//Then create an instance of the client class with the correct data.
const client = new Client({
  //change depending on who's computer
  user: 'macbookpro',
  host: 'localhost',
  database: 'notes',
  password: null,
  port: 5432,
})

client.connect()

Notebook.prototype.getNotes = function() {

    client.query('SELECT * FROM notes', (err, res) => {
        for (var i = 0; i < res.rows.length; i++) {
            console.log(res.rows[i].content)
        }
        client.end()
    })
}

