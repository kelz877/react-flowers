import React from 'react'
import {NavLink} from 'react-router-dom'
import '../baseLayout.css';
import {Navbar, Nav } from 'react-bootstrap'
import {connect} from 'react-redux'

function Navigation(props){

    return <Navbar bg="light" variant="light">
                <Navbar.Brand>Flower App</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to="/"><Nav.Link>Home</Nav.Link></NavLink>
                    <NavLink to="/flowers"><Nav.Link>View Flowers</Nav.Link></NavLink>
                    <NavLink to="/add-flower"><Nav.Link>Add Flower</Nav.Link></NavLink>
                    <NavLink to="/update-flower"><Nav.Link>Update Flowers</Nav.Link></NavLink>
                    <NavLink to="/cart"><Nav.Link> Shopping Cart {props.count}</Nav.Link></NavLink>
                </Nav>
            </Navbar>    
}
const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps, null)(Navigation)

