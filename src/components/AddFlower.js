import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class AddFlower extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            imageurl:''

        }
    }
    handleSave = () => {
        fetch('http://localhost:8080/flowers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                imageurl: this.state.imageurl
            })
        }).then(response => {
            this.setState({
                name: '',
                description: '',
                imageurl: ''
            })
        }).then(()=> {
            this.props.fetch()
        })
        
        .then(response => {
            this.props.history.push("/flowers")
        })
    }

    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="flower name" value={this.state.name} onChange={this.handleTextBoxChange} />
                <input type="text" name="description" placeholder="short description" value={this.state.description} onChange={this.handleTextBoxChange} />
                <input type="text" placeholder="image url" name="imageurl" value={this.state.imageurl} onChange={this.handleTextBoxChange} />
                <button onClick={this.handleSave}>Add Flower</button>
            </div>
        )
    }

}

export default withRouter(AddFlower)