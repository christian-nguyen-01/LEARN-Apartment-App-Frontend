import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import AuthService from '../services'

class Header extends Component {
  constructor(domain) {
    super(domain)
		this.domain = domain || 'http://localhost:3001'
    this.state = {
      isLoggedOut: false
    }
  }

	handleClick() {
    let auth = new AuthService()
    auth.logout()
    this.setState({isLoggedOut: true})
  }

  render() {
    let auth = new AuthService()

    if(auth.loggedIn()){
        return (<nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Gone Too Far</a>
        </div>



        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
          <ul class="nav navbar-nav">
            <li><a href={`/listings`}>See All Available Listings<span class="sr-only">(current)</span></a></li>
            <li><a href={`/newapartment`}>Create Apartment Listing</a></li>

          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search"/>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
            <button onClick={this.handleClick.bind(this)}> Logout </button>
            </li>
          </ul>
        </div>
      </div>
      {this.state.isLoggedOut && window.location.reload()}
    </nav>  )
    } else {
        return(
          <nav class="navbar navbar-inverse">
          {console.log('HI')}
          <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Gone Too Far</a>
          </div>



          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul class="nav navbar-nav">
              <li class="active"><a href={`/listings`}>See All Available Listings<span class="sr-only">(current)</span></a></li>
              <li><a href={`/newapartment`}>Create Apartment Listing</a></li>

            </ul>
            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li>
              <a href="/login"><button> Login </button></a>
              </li>
            </ul>
          </div>
          </div>
            {this.state.isLoggedOut && window.location.reload()}
          </nav>
           )
    }
  }
}

export default Header;
