import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateMortgage, updateRent } from './../../../ducks/reducer'
import './../Wizard.css'
import axios from 'axios';

class W3 extends Component {
    handleAddHouse() {
        const newHouse = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode,
            image: this.props.image,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }

        axios.post('/api/add/house', newHouse)
            .then()
            .catch((error) => console.log('Something went wrong with the handleAddHouse in Wizard'))
    }

    render() {
        const { updateMortgage, updateRent } =this.props
        return (
            <div>
                <input type='number' placeholder='mortgage' onChange={(e) => updateMortgage(e.target.value)}/>
                <input type='number' placeholder='rent' onChange={(e) => updateRent(e.target.value)}/>
                <Link to='/'>
                    <button onClick={() => this.handleAddHouse()}>Complete</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { name, address, city, state, zipcode, image, mortgage, rent } = reduxState
    return {
        name,
        address,
        city,
        state,
        zipcode,
        image,
        mortgage,
        rent
    }
}

const connectComponent = connect(mapStateToProps, { updateMortgage, updateRent })(W3)
export default connectComponent