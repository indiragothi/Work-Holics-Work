import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = ({ employees, fetchEmployees }) => {

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);
    
    
  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='container rounded-4 shadow-lg p-4 py-4'>
            <div className='d-flex justify-content-between '>
                <h5 className=''>Employee</h5>
                <button type="button" class="btn btn-outline-success btn-lg rounded-4 py-2 px-4">
                    <Link className='link-underline link-underline-opacity-0 ' to='/about'>Add Employee</Link>
                </button>
            </div>
            <div className='d-flex justify-content-between border border-1 rounded-3 mt-3'>
                <table className="table">
                    <thead className=''>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{employee.name}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-outline-primary btn-lg rounded-3" type="button">
                                    <Link className='link-underline link-underline-opacity-0' to={`/edit/${employee.id}`}>Edit</Link>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
