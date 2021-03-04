import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const PorpertyCard = (props) => {
  
  console.log('DATA', props.property.property.data.description)
    return (
    <div>
       
      <Card  >
        <CardImg  top width="100%"       src={props.property.property.data.ImageUrl} />
        <CardBody>
          <CardTitle tag="h5">{props.property.property.data.propertyType}</CardTitle>
          <CardText>{props.property.property.data.description}</CardText>
          <CardText>{props.property.property.data.numberBedrooms}</CardText>
          <CardText>{props.property.property.data.numberBaths}</CardText>
          <CardText>{props.property.property.data.price}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Row >
               <Col  className='d-flex justify-content-center'>
               <Button >SUBMIT AND OFFER</Button>
               </Col>
               </Row>
        </CardBody>

      </Card>
      </div>
      )
      
      }

      export default PorpertyCard
