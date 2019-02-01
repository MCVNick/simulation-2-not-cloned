import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './Wizard.css'

import W1 from './Steps/W1'
import W2 from './Steps/W2'
import W3 from './Steps/W3'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <div>
                Wizard
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <Switch>
                    <Route exact path='/wizard' component={W1}/>
                    <Route path='/wizard/w2' component={W2}/>
                    <Route path='/wizard/w3' component={W3}/>
                </Switch>
            </div>
        )
    }
}

export default Wizard