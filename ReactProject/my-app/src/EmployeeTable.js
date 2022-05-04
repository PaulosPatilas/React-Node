import React,{useState,useEffect} from 'react'
import EmployeeRow from './EmployeeRow';
import EmpoyeeAddition from './EmployeeAddition';
import { Link } from 'react-router-dom';
import{ButtonGroup,Button,Table} from 'reactstrap';


function EmployeeTable() {
    
  const [employees,setEmployees] = useState([]);

  useEffect(() => {
    
      fetch('http://localhost:8080/employees',
        {
         mode:'cors',
         headers:{
           "x-access-token": localStorage.getItem("token")
          }
        })
      .then(response => {
        return response.json()
      })
      .then((result) => {
        setEmployees(result);
        console.log(result);
      })
    
  },[]);
         //THELEI mode:'cors'
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
          setEmployees(updatedEmployees);
        });
    }
   


    const employeeList = employees.map(employee => {
      return (
        <tr key={employee.id}>
        <EmployeeRow edit={true} id={employee.id} LastName={employee.last_name} FirstName={employee.first_name} BirthDate={employee.date_of_birth.substring(0,10)} is_active={employee.is_active} />
        <ButtonGroup>
        <Button outline color='danger' onClick={()=> handleDeleteClick(employee.id)}>Delete</Button>
        <Button outline color='secondary' tag={Link}  to={"/employee/" + employee.id}>Update</Button>      
        </ButtonGroup>      
        </tr>       
    )});

    return (
      <div className="App">
      <header className="App-header">
        My first React-Node CRUD App
      </header>
      <div className='container'>
        <Button block outline color='primary' tag={Link} to = {"/createEmployee"}>Add new Employee</Button>
        
        <Table  bordered>
        <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Date of birth</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {employeeList}    
        </tbody>
      </Table>
      </div>
      
      <Button block outline color='warning' href= {"/"}>LogOut</Button>
      
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
