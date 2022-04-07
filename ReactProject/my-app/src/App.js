import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import EmployeeUpdate from './EmployeeUpdate';
import EmployeeTable from './EmployeeTable';
import EmployeeAddition from './EmployeeAddition';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path='/' element={<EmployeeTable/>}/>
        <Route exact={true} path='/employee/:id' element={<EmployeeUpdate/>}/>
        <Route exact={true} path='/createEmployee' element={<EmployeeAddition/>}/>
        <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          }
    />
        {/* <Route
        path="/redirect"
        element={<Navigate to="/" replace={true} />}
      /> */}
      </Routes>
    </div>
  );
}

export default App;
