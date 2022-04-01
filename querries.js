
//Connecting to a Postgres database from Node.js 
//In a production environment, you would want to put your configuration details 
//in a separate file with restrictive permissions that is not accessible from version control
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pavlos',
  host: 'localhost',
  database: 'knowledge',
  password: '1997PP11',
  port: 5432,
})

//GET all employees
const getUsers = async(request, response) => {
    console.log('starting async query')
    await pool.query('SELECT * FROM Employee ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
    console.log('async query finished')
}
//POST a new employee
 const  createUser = async(request, response) => {
    //We create the body of the request(what we will Post)
    const { last_name = 'Patilas', first_name = 'Georgios', is_active = true, date_of_birth = '03/08/1997' } = request.body
  
    await pool.query('INSERT INTO Employee (last_name, first_name, is_active, date_of_birth) VALUES ($1, $2, $3, $4)', [last_name, first_name, is_active, date_of_birth], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

//UPDATE an existing Employee
const updateUser = async(request, response) => {
    const id = parseInt(request.params.id)
    const { last_name = 'Patilas', first_name = 'Georgios', is_active = false, date_of_birth = '04/08/1997' } = request.body
  
    await pool.query(
      'UPDATE Employee SET last_name = $1, first_name = $2, is_active = $3, date_of_birth = $4 WHERE id = $5',
      [last_name, first_name, is_active, date_of_birth, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}

//DELETE an Employee
const deleteUser = async(request, response) => {
    const id = parseInt(request.params.id)
  
    await pool.query('DELETE FROM Employee WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  }