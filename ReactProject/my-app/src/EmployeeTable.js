import React,{useState,useEffect} from 'react'
import EmployeeRow from './EmployeeRow';

function EmployeeTable() {
    const [employees,setEmployees] = useState([]); 


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

      useEffect(() => {
        fetch('http://localhost:8080/employees', {mode:'cors'})
          .then(res => {
            return res.json()
          })
          .then((data) => {
            console.log(data);
            setEmployees(data);
          })
      },[]);
      


    const employeeList = employees.map(employee => {
      return 
        
        <EmployeeRow LastName={employee.last_name} FirstName={employee.first_name} BirthDate={employee.date_of_birth} isActive={employee.isActive} />
                 
    });

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
         {/* <EmployeeRow employees={employees}/>  */}
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
