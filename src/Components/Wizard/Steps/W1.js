import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateName, updateAddress, updateCity, updateState, updateZipcode } from './../../../ducks/reducer'
import './../Wizard.css'

class W1 extends Component {
    render() {
        const { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props
        return (
            <div>
                <input placeholder='name' onChange={(e) => updateName(e.target.value)}/>
                <input placeholder='address' onChange={(e) => updateAddress(e.target.value)}/>
                <input placeholder='city' onChange={(e) => updateCity(e.target.value)}/>
                <input placeholder='state' onChange={(e) => updateState(e.target.value)}/>
                <input placeholder='zipcode' type='number' onChange={(e) => updateZipcode(e.target.value)}/>
                <Link to='/wizard/w2'>
                    <button>Next</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { name, address, city, state, zipcode } = reduxState
    return {
        name,
        address,
        city,
        state,
        zipcode
    }
}

const connectComponent = connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZipcode })(W1)
export default connectComponent