const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'macbookpro',
    host: 'localhost',
    database: 'notes',
    password: null,
    port: 5432,

})

//Then create an instance of the client class with the correct data.
const client = new Client({
    //change depending on who's computer
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
})("phil");


//setTimeout(function(){ 
(Notebook.prototype.getNotes = function() {
    client.connect()
    client.query('SELECT * FROM notes;', (err, res) => {
        
        for (var i = 0; i < res.rows.length; i++) {
            
            console.log(res.rows[i].content)
            // console.log(this.thingsToRemember)
        }
        client.end()
    });
})() // }, 3000);

// console.log(this.thingsToRemember)

