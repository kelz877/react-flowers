import React, {Component} from 'react'
import App from './App'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {
    render() {
        return <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/flowers">View Flowers</NavLink></li>
                    <li><NavLink to="/add-flower">Add Flower</NavLink></li>
                    <li><NavLink to="/update-flower">Update Flowers</NavLink></li>
                </ul>
    }
}

export class Footer extends Component {
    render() {
        return <div>Footer</div>
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}