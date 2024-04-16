import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 
const About = ({ addEmployee,  editEmployee, employees}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
          const employeeToEdit = employees.find((employee) => employee.id === parseInt(id));
          if (employeeToEdit) {
            setName(employeeToEdit.name);
            setEmail(employeeToEdit.email);
            setPhone(employeeToEdit.phone);
          }
        }
    }, [id, employees]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone) {
          const newEmployee = {
            id: id || new Date().getTime(), // If editing, use existing ID, otherwise generate a new one
            name,
            email,
            phone
          };
          if (id) {
            editEmployee(newEmployee);
          } else {
            addEmployee(newEmployee);
          }
          navigate('/');
        } else {
          alert('Please fill in all fields.');
        }
      };


  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='container rounded-4 shadow-lg p-4 py-4'>
            <div className='d-flex justify-content-between '>
                <h5 className=''>{id ? 'Edit Employee' : 'Add Employee'}</h5>
            </div>
            <div className='form-section mt-3'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6 mb-4'>
                            <label for="name" className="form-label">Employee Name</label>
                            <input type="text" className="form-control " id="name" placeholder="Enter Employee Name" 
                                value={name} onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label for="number" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="number" placeholder="Enter Phone Number" 
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <button className="btn bg-primary-subtle rounded-3 btn-lg mt-2" type="submit" >
                                {id ? 'Update' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
};


export default About
