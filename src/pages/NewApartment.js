import React, { Component } from 'react';
import {
  Grid, Col, Row, ListGroup, ListGroupItem, FormControl, FormGroup, Button
} from 'react-bootstrap'



class NewApartment extends Component {

  constructor(props){
    super(props)
    this.state = {
      form:{
        street: '',
        city: '',
        postalCode: '',
        state: '',
        country:'',
        managerName: '',
        managerNumber: '',
        contactHours: ''
      }
    }
  }

  render() {
    console.log(this.state.form);
    return (

        <FormGroup>
          <label id = "street">Street Address</label>
          <FormControl
            type="text"
            name="street"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.street}
          />

          <label id = "city">City</label>
          <FormControl
            type="text"
            name="city"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.city}
          />

          <label id = "postalCode">Postal Code</label>
          <FormControl
            type="text"
            name="postalCode"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.postalCode}
          />

          <label id = "state">State</label>
          <FormControl
            type="text"
            name="state"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.state}
          />

          <label id = "country">Country</label>
          <FormControl
            type="text"
            name="country"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.country}
          />

          <label id = "managerName">Name of Property Manager</label>
          <FormControl
            type="text"
            name="managerName"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.managerName}
          />

          <label id = "contactHours">Contact Hours</label>
          <FormControl
            type="text"
            name="contactHours"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.contactHours}
          />

          <label id = "managerNumber">Phone Number</label>
          <FormControl
            type="text"
            name="managerNumber"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.managerNumber}
          />

          <Button id="submit" type="submit" className="btn btn-info" onClick = {this.handleSubmit.bind(this)}>Create Apartment Listing</Button>

        </FormGroup>

    );
  }

  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.handleNewListingData(this.state.form)
  }

}

export default NewApartment;
