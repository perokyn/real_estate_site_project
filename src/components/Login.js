import React from 'react';
import {Card,CardImg, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from '../assets/images/logo.png'

const Login = (props) => {
  return (
    <Card className="p-4">
      <CardImg  top width="100%"   style={{ width: '7rem', height:'7rem',margin:'auto',borderRadius:'50%' }}     src={logo} alt="Card image cap" />   
    <Form >
      <Row form>
        <Col >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="yourmail@mail.com" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <Col >
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="****" />
          </FormGroup>
        </Col>
      </Row>
      
     
     
        <Row>
          <Col >
          <Button className="w-100 bg-success" >Sign in</Button>
        </Col>
        
        </Row>

          <Row>
        <Col >
        <FormGroup check className="pt-3">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Remember Me</Label>
      </FormGroup>
        </Col>
        </Row>
        
      
    </Form>
    <Row>
      <Col className=" pt-5 d-flex justify-content-center">
      <Label for="register" >Not a member?</Label>
      </Col>
      
      </Row>
      <Row>
      <Col className=" d-flex justify-content-center ">
      <a href="#" className="link-primary">Register</a>
      </Col>
      
      </Row>
    </Card>
  );
}

export default Login;
