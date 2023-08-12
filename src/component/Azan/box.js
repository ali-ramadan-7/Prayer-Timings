import React from 'react'
function Box(props) {
    return (
    <div className='box'>
    <p>{props.name}</p>
    <p>{props.time}  <span>{props.apm}</span></p>
    </div>
    )
}

export default Box
