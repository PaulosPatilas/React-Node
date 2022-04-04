import React from 'react';

function EmployeeRow(props) {
    return(
    //     employees.map((employee)=>{
    //         <tr key={employee.id}>
    //     <td>{employee.last_name}</td>
    //     <td>{employee.FirstName}</td>
    //    <td>{employee.BirthDate}</td>
    //    <td>{employee.isActive}</td>
    //     <td><button>Delete</button> </td>
    //     <td><button>Update</button> </td>
    //     </tr>
    //     })
        
        
        
        <tr>
            <td>{props.LastName}</td>
            <td>{props.FirstName}</td>
            <td>{props.BirthDate}</td>
            <td>{props.isActive}</td>
            <td><button>Delete</button> </td>
            <td><button>Update</button> </td>
        </tr>
        
        
      
    )

    }
export default EmployeeRow