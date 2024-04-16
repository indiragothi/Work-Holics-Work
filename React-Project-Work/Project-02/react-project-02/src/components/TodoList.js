import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(editIndex !== null){
            // Add in existing todos
            const newTodos = [...todos];
            newTodos[editIndex] = editValue;
            setTodos(newTodos);
            setEditIndex(null);
        }else{
            // Create new todos
            setTodos([inputValue, ...todos]);
        }
        setInputValue('');
        setEditValue('');
    }

    function handleDelete(index){
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        if(editIndex === index){
            setEditIndex(null);
            setEditValue('');
        }
    }

    function handleEdit(index){
        setEditIndex(index);
        setEditValue(todos[index]);
    }

  return (
    <>  
       <div className='container text-center mt-5 shadow-lg rounded-4'>
            <h1 className='todo-list p-4 fw-bold'>To-Do List App</h1>
            <div>
                <form>
                    <div className='input-group mb-3 justify-content-center '> 
                        <input className='form-control rounded-2' type='text' placeholder='Enter Todo' value={editIndex !== null ? editValue : inputValue} onChange={handleChange}/> 
                        <button type='submit' className='btn btn-info mx-1' onClick={(e)=>handleSubmit(e)}>{editIndex !== null ? 'Save' : 'Add Todo'}</button> 
                    </div>
                </form>
                <div className='row justify-content-center'>
                    {todos.map((todo, index)=> (
                        <div key={index} className='col-12 col-lg-4 col-md-6 mb-3'>
                            <div className='card shadow rounded-3 m-2'>
                                <div className='card-body'>{editIndex === index ? (
                                    <input className='form-control' type='text' value={editValue} onChange={e => setEditValue(e.target.value)}/>      
                                ) : ( 
                                       todo  
                                    ) }
                                </div>
                                <div className='btn-group' role="group">
                                    <button type='button' className='btn btn-outline-info my-3 mx-5' 
                                        onClick={()=>editIndex === index ? handleSubmit() : handleEdit(index)}>
                                        {editIndex === index ? 'Save' : 'Edit'}
                                    </button>
                                    <button type='button' className='btn btn-outline-danger my-3 mx-5' 
                                        onClick={()=>handleDelete(index)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>             
                    ))}            
                </div>
            </div>
       </div>
    </>
  )
}

export default TodoList
