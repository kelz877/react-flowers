import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class UpdateFlower extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            imageurl: '',
            id: ''
        }
        this.fetchFlower()
    }

    fetchFlower = () => {
        // let params = (new URLSearchParams(this.props.location.search));
        let id = this.props.match.params.id
        console.log(id)
        // console.log(params)
        fetch(`http://localhost:8080/flowers/${id}`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            ...json //spread operator
          })
        })
      }

    handleUpdate = () => {
        fetch('http://localhost:8080/update-flower', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                imageurl: this.state.imageurl,
                id: this.state.id
            })
        }).then(response => {
            
            this.setState({
                name: '',
                description: '',
                imageurl: '',
                id: ''
            })
        }).then(() => {
            this.props.fetch()
        })
        .then(response => {
            this.props.history.push('/flowers')
        })

    }
    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return  <div>
                    <input type="text" name="name" placeholder="flower name" value={this.state.name} onChange={this.handleTextBoxChange} />
                    <input type="text" name="description" placeholder={this.state.description} value={this.state.description} onChange={this.handleTextBoxChange} />
                    <input type="text" placeholder="image url" name="imageurl" value={this.state.imageurl} onChange={this.handleTextBoxChange} />
                    <input type="hidden" name="id" value={this.state.id} />
                    <button onClick={this.handleUpdate}>Update Flower</button>
    </div>
    }



}

export default withRouter(UpdateFlower)