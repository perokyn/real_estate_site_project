import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Services = (props) => {
  return (
    <Row className=' d-block d-sm-flex p-2'>
        <Col>
      <Card  >
        <CardImg  top width="100%"   style={{ width: '7rem', margin:'auto' }}     src="/assets/images/s2.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Our Sellers</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>


      <Col >

      <Card  >
        <CardImg top width="100%"   style={{ width: '7rem', margin:'auto' }}   src="/assets/images/s1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Our Buyers</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>

      <Card>
        <CardImg top width="100%"   style={{ width: '7rem', margin:'auto' }}   src="/assets/images/s3.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Our Agents</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>

      </Col>
    </Row>
  );
};

export default Services
