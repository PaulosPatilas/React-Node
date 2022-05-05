
//Setting up an Express.js server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const cookieParser = require("cookie-parser");
const { validateToken } = require("./JWT");
const cors = require('cors')
const db = require('./querries');


app.use(cookieParser())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json());

var corsOptions = {
  origin: ' http://localhost:5000',
  credentials: true,
}
app.use(cors(corsOptions))
//Root Endpoint
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


//CRUD ROUTES
app.get('/employees',validateToken ,db.getEmployees)
app.get('/employee/:id', validateToken,db.getEmployeeById)
app.post('/employee', validateToken,db.createEmployee)
app.put('/employee/:id', validateToken,db.updateEmployee)
app.delete('/employee/:id', validateToken,db.deleteEmployee)
//JWT Login
app.post('/userRegistry', db.createUser)
app.post('/login', db.loginUser)
app.get('/isUserAuth',validateToken,db.validateAuth)
