import React, {Component} from 'react';

import AddFlower from './AddFlower'
import DisplayFlowers from './FlowerList'
import {Route} from 'react-router-dom';
import UpdateFlower from './UpdateFlower'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flowers: []
    }
    this.fetchFlowers()
  }
  fetchFlowers = () => {
    fetch('http://localhost:8080/flowers')
    .then(response => response.json())
    .then(json => {
      //console.log(json)
      this.setState({
        flowers: json
      })
    })
  }




  render() {
    return <div className="mainDisplay">
              <Route path='/add-flower' render = {() => <AddFlower fetch={this.fetchFlowers} />}/>
              <Route path='/flowers/update-flower/:id' render={() => <UpdateFlower fetch={this.fetchFlowers}/>} />
              <Route path='/flowers' exact render={() => <DisplayFlowers fetch={this.fetchFlowers} flowers = {this.state.flowers} /> } />
              
            </div>
  }

}
export default App;
