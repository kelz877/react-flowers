import React, {Component} from 'react'
import {CardDeck, Card, Button} from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';

class DisplayFlowers extends Component {
    constructor(props) {
        super(props)
    }

    deleteFlower = (id) => {
        fetch('http://localhost:8080/delete-flower', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        }).then(() => {
            this.props.fetch()
        }).then(response => {
            this.props.history.push("/flowers")
        })
    }

    addToCart = (ID) => {
        this.props.onIncrement(ID)
        console.log(ID)

    }

    render() {
        let flowerItems = this.props.flowers.map(flower => {


            return (<div key={flower.id}>
                    
                        <Card style={{width: '18rem'}}>
                        <div>
                            <Card.Img variant="top" src={flower.imageurl} alt="flower" />
                            <Card.Body>
                                <Card.Title>{flower.name}</Card.Title>
                                <Card.Text>{flower.description}</Card.Text>
                                <Button variant="outline-danger" onClick={() => this.deleteFlower(flower.id)}> Delete Flower</Button>
                                <Link to={`/flowers/update-flower/${flower.id}`}><Button variant="outline-info">Update Flower</Button></Link>
                                <Button variant='info' onClick={() => this.addToCart(flower.id)}>Add To Cart</Button>
                            </Card.Body>
                        </div>

                        </Card>
                     
                    </div>
            )
        })
        return <div className="flowerItemDiv">
            <h1>Flower List</h1>
            <CardDeck >{flowerItems}</CardDeck>   
        </div>
    }




}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (ID) => dispatch({ type: 'Count_CART', payload: ID})
    }
}


export default connect(null, mapDispatchToProps)(withRouter(DisplayFlowers))