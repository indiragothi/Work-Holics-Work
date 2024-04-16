import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const editEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const fetchEmployees = () => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home employees={employees} fetchEmployees={fetchEmployees} />} />
          <Route path='/about' element={<About addEmployee={addEmployee} />} /> 
          <Route path='/edit/:id' element={<About editEmployee={editEmployee} employees={employees}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
