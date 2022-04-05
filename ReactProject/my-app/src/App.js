import logo from './logo.svg';
import './App.css';
import Table from './EmployeeTable';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeUpdate from './EmployeeUpdate';
import EmployeeTable from './EmployeeTable';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<EmployeeTable/>}/>
        <Route path='/employee/:id' element={<EmployeeUpdate/>}/>
      </Routes>
    </Router>
    {/* <div className="App">
      <header className="App-header">
        My first React-Node CRUD App
      </header>
      <div className='container'>
        <EmpoyeeAddition/>
        <Table/>
      </div>
      
    </div> */}
    </>
  );
}

export default App;
