import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Wizard.css'
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleInputChanges(toUpdate, val) {
        console.log(val)
        switch (toUpdate) {
            case 'name':
                this.setState({
                    name: val
                })
                break
            case 'address':
                this.setState({
                    address: val
                })
                break
            case 'city':
                this.setState({
                    city: val
                })
                break
            case 'state':
                this.setState({
                    state: val
                })
                break
            case 'zipcode':
                this.setState({
                    zipcode: val
                })
                break
            default:
                break
        }
    }

    handleAddHouse() {
        const newHouse = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        }

        axios.post('/api/add/house', newHouse)
            .then()
            .catch((error) => console.log('Something went wrong with the handleAddHouse in Wizard'))
    }

    render() {
        return (
            <div>
                Wizard
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <input placeholder='name' onChange={(e) => this.handleInputChanges('name', e.target.value)} value={this.state.name} />
                <input placeholder='address' onChange={(e) => this.handleInputChanges('address', e.target.value)} value={this.state.address} />
                <input placeholder='city' onChange={(e) => this.handleInputChanges('city', e.target.value)} value={this.state.city} />
                <input placeholder='state' onChange={(e) => this.handleInputChanges('state', e.target.value)} value={this.state.state} />
                <input placeholder='zipcode' onChange={(e) => this.handleInputChanges('zipcode', e.target.value)} value={this.state.zipcode} type='number' />
                <Link to='/'>
                    <button onClick={() => this.handleAddHouse()}>Complete</button>
                </Link>
            </div>
        )
    }
}

export default Wizard