import logo from './logo.svg';
import './App.css';
import Table from './EmployeeTable';
import EmpoyeeAddition from './EmployeeAddition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My first React-Node CRUD App
      </header>
      <div className='container'>
        <EmpoyeeAddition/>
        <Table/>
      </div>
      
    </div>
  );
}

export default App;
