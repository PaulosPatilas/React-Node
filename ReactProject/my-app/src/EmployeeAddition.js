
import React,{useEffect, useState} from 'react';

function EmployeeAddition() {
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        console.log (`You clicked ${count} times`);
    });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add new Employee</button>
            <p>You clicked on me {count} times</p>
        </div>
    )        
}    

export default EmployeeAddition; 