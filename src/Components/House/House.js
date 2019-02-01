import React from 'react'
import './House.css'

function House(props) {
    return (
        <div className='house'>
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zipcode}</p>
            <button onClick={() => props.handleDeleteHouseFn(props.id)}>X</button>
        </div>
    )
}

export default House