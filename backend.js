const { Pool,  Client } = require('pg')

const pool = new Pool({
    user: 'macbookpro',
    host: 'localhost',
    database: 'notes',
    password: null,
    port: 5432,

})

pool.query("INSERT INTO notes (content) VALUES ('dave');", (err, res) => {
    pool.end()
  })


//Then create an instance of the client class with the correct data.
const client = new Client({
  user: 'macbookpro',
  host: 'localhost',
  database: 'notes',
  password: null,
  port: 5432,
})

client.connect()

client.query('SELECT * FROM notes', (err, res) => {
    for (var i = 0; i < res.rows.length; i++) {
        console.log(res.rows[i].content)
    }
    client.end()
  })






