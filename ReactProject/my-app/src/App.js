import './App.css';
import { Route, Routes } from 'react-router-dom';
import EmployeeUpdate from './EmployeeUpdate';
import EmployeeTable from './EmployeeTable';
import EmployeeAddition from './EmployeeAddition';
import Registration from './Registration';
import Login from './Login';
import {AuthProvider} from './GlobalStates.js';
function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route exact={true} path='/home' element={<EmployeeTable/>}/>
          <Route exact = {true} path='/' element={<Login/>}/>
          <Route exact={true} path='/employee/:id' element={<EmployeeUpdate/>}/>
          <Route exact={true} path='/createEmployee' element={<EmployeeAddition/>}/>
          <Route exact={true} path='/registration' element={<Registration/>}/>
          <Route
            path="*"
            element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }/>
        </Routes>
      </div>
    
  );
}

export default App;
