
//Connecting to a Postgres database from Node.js 
//In a production environment, you would want to put your configuration details 
//in a separate file with restrictive permissions that is not accessible from version control
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'knowledge',
  password: '12345',
  port: 5432,
})

//GET all employees
const getEmployees = async(request, response) => {
    console.log('starting async query')
    await pool.query('SELECT * FROM Employee ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
    console.log('async query finished')
}

const getEmployeeById = async(request, response) => {
  const id = parseInt(request.params.id)
  await pool.query(
    'SELECT * FROM Employee WHERE id = $1' ,[id], (error,results) => {
      if(error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log('Employee with id'+ id);
    })
}

//POST a new employee
 const  createEmployee = async(request, response) => {
    //We create the body of the request(what we will Post)
    const { last_name, first_name, is_active, date_of_birth } = request.body
  
    await pool.query('INSERT INTO Employee (last_name, first_name, is_active, date_of_birth) VALUES ($1, $2, $3, $4)', [last_name, first_name, is_active, date_of_birth], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${response.insertId}`)
    })
}

//UPDATE an existing Employee
const updateEmployee = async(request, response) => {
    const id = parseInt(request.params.id)
    console.log(id);
    const {last_name, first_name, is_active, date_of_birth } = request.body;
    console.log(request);
    await pool.query(
      'UPDATE Employee SET last_name = $1, first_name = $2, is_active = $3, date_of_birth = $4 WHERE id = $5',
      [last_name, first_name, is_active, date_of_birth, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}` + request.body)
      }
    )
    console.log('DONE');
}

//DELETE an Employee
const deleteEmployee = async(request, response) => {
    const id = parseInt(request.params.id)
  
    await pool.query('DELETE FROM Employee WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  const createUser = async(request,response) => {
    
    const {username,password} = request.body

    await pool.query('INSERT INTO Users VALUES($1,$2)',[username,password],(error,results) =>{
      if (error) {
        throw error
      }
      response.status(200).send('User added. Welcome !!')
    })
  }

  module.exports = {
    createUser,
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
  }