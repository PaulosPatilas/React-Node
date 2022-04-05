import React,{useState,useEffect} from 'react'
import EmployeeRow from './EmployeeRow';
import axios from 'axios';
import EmpoyeeAddition from './EmployeeAddition';
import { Link } from 'react-router-dom';


function EmployeeTable() {
    
    const [employees,setEmployees] = useState([]);

      useEffect(() => {
        fetch('http://localhost:8080/employees', {mode:'cors'})
          .then(response => {
            return response.json()
          })
          .then((result) => {
            setEmployees(result);
            console.log(result);
          })
      },[]);
      
      const handleUpdateClick = function(e){
        // use function statements to avoid creating new instances on every render
        // when you use `bind` or arrow functions
        console.log(e);
        console.log('memoizing can lead to more work!')
        
      };
      
      async function handleDeleteClick(id){
        console.log(id);
        await fetch(`http://localhost:8080/employee/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          //vriskw ola ta employees pou den exoun auto to id etsi kai na allaksw to state me ayta wste na diwksw to ena
          let updatedEmployees = [...employees].filter(i => i.id !== id);
          setEmployees (updatedEmployees);
        });
    }
   


    const employeeList = employees.map(employee => {
      return (
        <tr>
        <EmployeeRow edit={true} id={employee.id} LastName={employee.last_name} FirstName={employee.first_name} BirthDate={employee.date_of_birth.substring(0,10)} isActive={employee.isActive ? 'yes' : 'no'} />
        <button onClick={()=> handleDeleteClick(employee.id)}>Delete</button>
        <button><Link tag={Link}  to={"/employee/" + employee.id}>Update</Link></button>   
        </tr>             
    )});

    return (
      <div className="App">
      <header className="App-header">
        My first React-Node CRUD App
      </header>
      <div className='container'>
        <EmpoyeeAddition/>
        <table>
        <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Date of birth</th>
          <th>Active</th>
        </tr>
        </thead>
        <tbody>
        {employeeList}    
        </tbody>
      </table>
      </div>
      
    
      
      </div>
      )
    
}
  export default EmployeeTable

    //   useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
                
    //             const response = await axios.get('http://localhost:8080/employees');
    //             setEmployees(response.data);
                
    //         } catch (e) {
    //             console.log(e);
                
    //         }
    //     };
    //     fetchUsers();
    //     console.log(employees);
    // }, []);
