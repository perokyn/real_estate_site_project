import React from 'react';
import s1 from '../assets/images/s1.jpg'
import s2 from '../assets/images/s2.jpg'
import s3 from '../assets/images/s3.jpg'


import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Services = (props) => {
  return (
    <Row className=' d-block d-sm-flex p-2'>
        <Col>
      <Card  >
        <CardImg  top width="100%"   style={{ width: '7rem', margin:'auto' }}     src={s2} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Our Sellers</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">All our members are fully insured</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>


      <Col >

      <Card  >
        <CardImg top width="100%"   style={{ width: '7rem', margin:'auto' }}   src={s1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Our Buyers</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Direct client conenction</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>

      <Card>
        <CardImg top width="100%"   style={{ width: '7rem', margin:'auto' }}   src={s3} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Our Agents</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">All our agents are certifyed</small>
          </CardText>
        </CardBody>
      </Card>

      </Col>
    </Row>
  );
};

export default Services
