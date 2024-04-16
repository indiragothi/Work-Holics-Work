import React from 'react'

const Button = (props) => {
  return (
    <div className='px-5'>
        <button className='btn rounded-circle text-dark bg-white border border-black' onClick={props.onClick}>
            {props.value}
        </button> 
    </div>
  )
}

export default Button
