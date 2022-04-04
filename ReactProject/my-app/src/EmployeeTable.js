import React,{useState,useEffect} from 'react'
import EmployeeRow from './EmployeeRow';
import axios from 'axios';


function EmployeeTable() {
    const [data,setData] = useState({employees:[], isFetching:false}); 


    // const makeAPICall = async () => {
    //     try {
    //       const response = await fetch('http://localhost:8080/employees', {mode:'cors'});
    //       const data = await response.json();
    //       console.log(data)
    //       setEmployees(data);
    //     }
    //     catch (e) {
    //       console.log(e)
    //     }
    //   }

      // useEffect(() => {
      //   setData({employees: data.employees, isFetching: true})
      //   fetch('http://localhost:8080/employees', {mode:'cors'})
      //     .then(response => {
      //       setData({employees: response.data, isFetching: false})
      //       console.log(data)
      //       return response.json()
      //     })
      //     .then((result) => {
      //       console.log(result.data);
      //     })
      // },[]);
      
      useEffect(() => {
        const fetchUsers = async () => {
            try {
                
                const response = await axios.get('http://localhost:8080/employees');
                setData({employees: response.data, isFetching: false});
                console.log(data.employees[0].date_of_birth);
            } catch (e) {
                console.log(e);
                
            }
        };
        fetchUsers();
    }, []);


    const employeeList = data.employees.map(employee => {
      return (
        <EmployeeRow LastName={employee.last_name} FirstName={employee.first_name} BirthDate={employee.date_of_birth} isActive={employee.isActive} />                
    )});

    return (
      <table>
        <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Date of birth</th>
          <th>Activity</th>
        </tr>
        </thead>
        <tbody>
        {employeeList}
        </tbody>
      </table>
      )
    
}
  export default EmployeeTable


//    useEffect(() => {
//     axios.get('api/get/allusers')
//     .then(res => setState({users: res.data}))
//     .catch(err => console.log(err))
// }, [])

// {employees && employees.map(employee => { <tr key={employee.id}>
//   <Employee LastName={employee.last_name} FirstName={employee.first_name} BirthDate={employee.date_of_birth} isActive={employee.isActive} />
//   </tr>})}
