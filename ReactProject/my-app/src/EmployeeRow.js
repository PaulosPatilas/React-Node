import React from 'react';


function EmployeeRow(props) {
     
    return(
        <>
        <td contenteditable="true">{props.LastName}</td>
        <td contenteditable="false">{props.FirstName}</td>
        <td contenteditable="false">{props.BirthDate}</td>
        <td contenteditable="false">{props.isActive}</td>
        </>                 
    )

}
export default EmployeeRow
