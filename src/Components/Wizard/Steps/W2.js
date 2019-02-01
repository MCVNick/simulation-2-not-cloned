import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImage } from './../../../ducks/reducer'
import './../Wizard.css'

class W2 extends Component {
    render() {
        const { updateImage } = this.props
        return (
            <div>
                <input placeholder='image' onChange={(e) => updateImage(e.target.value)} />
                <Link to='/wizard/w3'>
                    <button>Next</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { image } = reduxState
    return {
        image
    }
}

const connectComponent = connect(mapStateToProps, { updateImage })(W2)
export default connectComponent