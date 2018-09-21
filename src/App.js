import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Listings from './pages/Listings'
import NewApartment from './pages/NewApartment'
import Header from './components/Header'
import AuthService from './services'
import Register from './pages/Register'
import Login from './pages/Login'

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

  handleNewListingData(form){
    console.log(form);
  }



  render() {
    let auth = new AuthService
    return (
        <div>
            <Header />
            <Router>

              {(auth.loggedIn())
              // if logged in
              ? <Switch>
                <Route exact path="/listings" render={(props) => <Listings apartments={this.state.apartments}/>} />
                  <Redirect from="/login" to="/newapartment" />
                <Route exact path="/newapartment" render={(props) => <NewApartment handleNewListingData = {this.handleNewListingData} />} />

                <Route path="/register" component={Register} />
              </Switch>
              // if not logged in (ie Guest User)
              : <Switch>
                <Route exact path="/listings" render={(props) => <Listings apartments={this.state.apartments}/>} />
                <Redirect from="/newapartment" to="/login" />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>}

            </Router>
        </div>
    );
  }
}

export default App;
