import React from 'react'

const Employee = () => {
    
  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='container rounded-4 shadow-lg p-4 py-4'>
            <div className='d-flex justify-content-between '>
                <h5 className=''>Employee</h5>
                <button type="button" class="btn btn-outline-success btn-lg rounded-4 py-2 px-4">Add Employee</button>
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
                        <tr className=''>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" class="btn btn-outline-primary btn-lg rounded-3">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Employee
