import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import axios from 'axios';

import House from './../House/House'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            listOfHouses: []
        }

        this.handleDeleteHouse = this.handleDeleteHouse.bind(this)
    }

    componentDidMount() {
        this.getAllHouses()
    }

    getAllHouses() {
        axios.get('/api/houses')
            .then((houses) => {
                this.setState({
                    listOfHouses: houses.data
                })
            })
            .catch((error) => console.log('O snap something went wrong in dashboard getAllHouses'))
    }

    handleDeleteHouse(id) {
        axios.delete(`/api/house/${id}`)
            .then(() => {
                this.getAllHouses()
            })
            .catch((error) => console.log('O snap something went wrong in dashboard with handleDeleteHouse'))
    }

    render() {
        let listOfHouses = this.state.listOfHouses.map((house, index) => {
            return (
                <div key={index}>
                    <House
                        handleDeleteHouseFn={this.handleDeleteHouse}
                        id={house.id} name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zipcode={house.zipcode}
                        image={house.image}
                        mortgage={house.mortgage}
                        rent={house.rent}
                    />
                </div>
            )
        })

        return (
            <div>
                {console.log(this.props.match)}
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                {listOfHouses}
            </div>
        )
    }
}

export default Dashboard