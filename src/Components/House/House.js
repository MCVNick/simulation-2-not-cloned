import React from 'react'
import './House.css'

function House(props) {
    return (
        <div className='house'>
            {
                props.image ?
                    <img className='houseItemImage' src={props.image} alt={props.id}/> :
                    null
            }
            <div className='houseItems1'>
                <p className='houseContent'>Property Name: {props.name}</p>
                <p className='houseContent'>Address: {props.address}</p>
                <p className='houseContent'>City: {props.city}</p>
                <p className='houseContent'>State: {props.state}</p>
                <p className='houseContent'>Zip: {props.zipcode}</p>
            </div>
            <div className='houseItems2'>
                {
                    props.mortgage ?
                        <div><p className='houseContent'>Monthly Mortgage: {props.mortgage}</p></div> :
                        null
                }
                {
                    props.rent ?
                        <div><p className='houseContent'>Desired Rent: {props.rent}</p></div> :
                        null
                }
            </div>
            <button className='houseDelete' onClick={() => props.handleDeleteHouseFn(props.id)}>X</button>
        </div>
    )
}

export default House