import React from 'react'
import {NavLink} from 'react-router-dom'
import '../baseLayout.css';
import {Navbar, Nav } from 'react-bootstrap'
import {connect} from 'react-redux'

function Navigation(props){

    return <Navbar bg="light" variant="light">
                <Navbar.Brand href='/'>Flower App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="/flowers">View Flowers</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/add-flower">Add Flower</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/update-flower">Update Flowers</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/cart"> Shopping Cart {props.count}</NavLink></Nav.Link>
                </Nav>
            </Navbar>    
}
const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps, null)(Navigation)

