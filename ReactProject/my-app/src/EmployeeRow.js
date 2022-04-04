import React from 'react';

const EmployeeRow = (props) => {
    return(<tr>
        <td>{props.last_name}</td>
        <td>{props.FirstName}</td>
       <td>{props.BirthDate}</td>
       <td>{props.isActive}</td>
        <td><button>Delete</button> </td>
        <td><button>Update</button> </td>
        </tr>
        
        // Array.from(employees).map((employee) => { 
        // <tr>
        //     <td>{employee.last_name}</td>
        //     <td>{employee.FirstName}</td>
        //     <td>{employee.BirthDate}</td>
        //     <td>{employee.isActive}</td>
        //     <td><button>Delete</button> </td>
        //     <td><button>Update</button> </td>
        // </tr>
        // })
        
      
    )

    }
export default EmployeeRow