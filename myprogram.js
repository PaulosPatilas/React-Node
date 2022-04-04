
//Setting up an Express.js server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
var cors = require('cors')
// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
//app.use(cors())
//Root Endpoint
app.get('/', (request, response) => {

    response.json({ info: 'Node.js, Express, and Postgres API' })
    response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

const db = require('./querries')

app.get('/employees', db.getUsers)
//app.get('/users/:id', db.getUserById)
app.post('/employee', db.createUser)
app.put('/employee/:id', db.updateUser)
app.delete('/employee/:id', db.deleteUser)
// const { Client } = require('pg')
// const client = new  Client()

// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()