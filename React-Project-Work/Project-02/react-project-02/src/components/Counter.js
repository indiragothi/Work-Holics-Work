import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container text-center mt-5 shadow-lg rounded-4">
        <h1 className='p-3 fw-bold'>Counter-App</h1>
        <div className="fs-4 text-bold text-primary-emphasis">Count : {count}</div> 
        <button type="button" class="btn btn-outline-secondary mx-3 my-3" onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button> 
        <button type="button" class="btn btn-outline-secondary mx-3 my-3" onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
    </>
  );
};

export default Counter;
