import React, { useEffect, useState } from "react";
import { Link, useParams,useRouteMatch } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import './EmployeeUpdate.css';
import {
  useLocation,
  useNavigate
} from "react-router-dom";  

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}


function EmployeeUpdate() {

  var emptyEmployee = {
    id:0,
    last_name:'',
    first_name:'',
    date_of_birth:'',
    is_active:''
  };


  const [employee,setEmployee] = useState(emptyEmployee);
  const [checked, setChecked] = useState(false);
  const  params = useParams();

  const id = params.id;

  useEffect(async () => {
    console.log('useEffect is Working...')
    await fetch(`http://localhost:8080/employee/${id}`, {mode:'cors'})
    .then(response => {
      return response.json()
    })
    .then((result) => {
      setEmployee(result[0]);
      console.log(result);
      
    })
    
    setChecked(employee.is_active);
  },[] );

  function handleChange(event)  {
    setEmployee({...employee,[event.target.name]:event.target.value})
  }

  async function handleSubmit(e){

    e.preventDefault();
    
    setEmployee(employee.is_active = checked);
    employee.date_of_birth = employee.date_of_birth.substring(0,10);
    console.log('HandleSubmit is Working for Employee:'+ JSON.stringify(employee));
    
    await fetch(`http://localhost:8080/employee/${employee.id}`,
    {
      mode:'cors',
      method: 'PUT',
      headers: { 
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body:JSON.stringify(employee)
    })
    console.log('Update is in progress...' + JSON.stringify(employee))
    // .then(response => {
    //   console.log(response);
    //   return response.json()
    // })
    console.log('Update is DONE')
  }
  

  return(
    <div>
      <header className="App-header">
        My first React-Node CRUD App
      </header>
      <h1 style={{ textAlign: "center" , font:14}}>Edit {employee.first_name}  {employee.last_name} Profile!</h1>
      <Container> 
        <Form onSubmit={(e)=> handleSubmit(e)}>
          <FormGroup>
            <Label for="firstname">Firstname</Label>
            <Input type="text" name="first_name" id="firstname" value={employee.first_name}
              onChange={(e) => {handleChange(e)}} autoComplete="firstname"/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Lastname</Label>
            <Input type="text" name="last_name" id="lastname" value={employee.last_name}
              onChange={(e) => {handleChange(e)}} autoComplete="lastname"/>
            </FormGroup>          
            <FormGroup>
              <Label for="age">Date of Birth</Label>
              <Input type="date" name="date_of_birth" id="age" value={employee.date_of_birth.substring(0,10)}
                onChange={(e) => {handleChange(e)}} autoComplete="age"/>
            </FormGroup>
            <FormGroup check inline>
              <Label for="isActive">Active</Label>
              <Input type="checkbox" name="is_active" id="isActive" defaultChecked={checked} value={employee.is_active ? 'Yes' : 'No'}
                onChange={() => setChecked(!checked)} autoComplete="isActive"/>
            </FormGroup>
            <FormGroup>
              <Button outline color="primary" type="submit"  >Save</Button>{/*tag={Link} to="/" */}
              <Button outline color="secondary" tag={Link} to="/">Cancel</Button>
            </FormGroup>
          </Form>
        </Container>
       
      </div>
    )

}
export default EmployeeUpdate;