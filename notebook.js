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
