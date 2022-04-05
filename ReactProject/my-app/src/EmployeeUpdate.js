import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

  
function EmployeeUpdate() {

    var emptyEmployee = {
        id: Number,
        last_name:'',
        first_name:'',
        date_of_birth:'',
        isActive:''
    };

    const [employee,setEmployee] = useState(emptyEmployee);
    const  params = useParams();
    const id = params.id;

    useEffect(async () => {
        await fetch(`http://localhost:8080/employee/${id}`, {mode:'cors'})
        .then(response => {
            return response.json()
          })
          .then((result) => {
            setEmployee(result[0]);
            console.log(result);
            console.log(employee);
          })
    },[]);


   const handleChange = (event) => {
        value = event.target.value ;
        employee[target.name] = value ;
        setEmployee(employee);
    }

    return(
        <div>
            <h1>Edit {employee.last_name}  {employee.first_name} Profile!</h1>
        <Container>
          
          <Form onSubmit={()=> console.log('submit')}>
            <FormGroup>
              <Label for="firstname">Firstname</Label>
              <Input type="text" name="first_name" id="firstname" value={employee.first_name}
                     onChange={this.handleChange} autoComplete="firstname"/>
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Lastname</Label>
              <Input type="text" name="last_name" id="lastname" value={employee.last_name}
                     onChange={handleChange} autoComplete="lastname"/>
            </FormGroup>          
            <FormGroup>
              <Label for="age">Date of Birth</Label>
              <Input type="date" name="date_of_birth" id="age" value={employee.date_of_birth}
                     onChange={handleChange} autoComplete="age"/>
            </FormGroup>
            <FormGroup>
              <Label for="isActive">Active</Label>
              <Input type="text" name="isActive" id="isActive" value={employee.isActive ? 'Yes' : 'No'}
                     onChange={handleChange} autoComplete="isActive"/>
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary"><Link to="/">Cancel</Link></Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    )

}
export default EmployeeUpdate;