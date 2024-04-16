import React from 'react'
import { Link } from 'react-router-dom'

const AddEmp = () => {
  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='container rounded-4 shadow-lg p-4 py-4'>
            <div className='d-flex justify-content-between '>
                <h5 className=''>Add Employee</h5>
            </div>
            <div className='form-section mt-3'>
                <form>
                    <div className='row'>
                        <div className='col-md-6 mb-4'>
                            <label for="name" className="form-label">Employee Name</label>
                            <input type="text" className="form-control " id="name" placeholder="Enter Employee Name"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label for="number" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="number" placeholder="Enter Phone Number"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <button className="btn bg-primary-subtle rounded-3 btn-lg mt-2" type="submit"><Link className='link-underline link-underline-opacity-0' to='#'>Submit</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddEmp
