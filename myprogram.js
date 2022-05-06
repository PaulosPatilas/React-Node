
//Setting up an Express.js server
const express = require('express')
const cookieParser = require("cookie-parser");
const { validateToken } = require("./JWT");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080
const db = require('./querries');
const path = require('path')

const corsOptions = {
  origin: ' http://localhost:3000',
  credentials: true,
}

//Process.env.NODE_ENV indicates if we are on production enviroment or not 

app.use(cookieParser())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json());
app.use(cors(corsOptions))

//Root Endpoint
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
console.log("Our Enviroment is " + process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production'){
  //server static content 
  app.use(express.static(path.join(__dirname,'ReactProject/build')))
}

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
