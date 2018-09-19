import React, { Component } from 'react';
import {
  Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'



class Listings extends Component {

  render() {
    return (

    <Grid>
      <Row>
      <Col xs={12}>
          <ListGroup>
          {this.props.apartments.map((apartment, index) =>{
            return (
              <ListGroupItem
                key={index}
                header={
                  <h4>
                    <span className='apartment-address'>
                      {apartment.street}, {apartment.city}, {apartment.state} {apartment.postalCode}, {apartment.country}
                    </span>

                  </h4>
                }>
                <span className='apartment-manager'>
                  Contact: {apartment.managerInfo.name}
                </span>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Col>
      </Row>
    </Grid>
    );
  }
}

export default Listings;
