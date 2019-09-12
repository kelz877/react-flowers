import React, {Component} from 'react'

import '../baseLayout.css';

import Navigation from './Navigation'



export class Footer extends Component {
    render() {
        return <div>Footer</div>
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}