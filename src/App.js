import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Listings from './pages/Listings'
import NewApartment from './pages/NewApartment'
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [
        {
          id:1,
          street: "7000 Fisk Street",
          city: 'San Diego',
          postalCode: "92122",
          state: "CA",
          country: "USA",
          managerInfo: {
            name:"Jon",
            number:"858-100-1223",
            hours:"9am-5pm"
          }
        },
        {
          id:2,
          street: "300 Lebum Street",
          city: 'San Diego',
          postalCode: "92822",
          state: "CA",
          country: "USA",
          managerInfo: {
            name:"Jebron Lames",
            number:"858-678-1223",
            hours:"9am-5pm"
          }
        }
      ]
    }
  }
  render() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/listings" render={(props) => <Listings apartments={this.state.apartments}/>} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
