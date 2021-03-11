import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Row,Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
<Label className='sectionTitle mt-5' htmlFor="FirstName">Get in Touch</Label>
      <FormGroup > 

          <Row >
              <Col xs={12} sm={5}>
      <Label htmlFor="FirstName">First name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="John"
        />
        </Col>
        <Col xs={12} sm={5}>
      <Label htmlFor="LastName">Last name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Wick"
        />
        </Col>
      
        
        
        </Row>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
     
 
      <FormGroup>
        <Label htmlFor="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text htmlFor the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleRange">Price range</Label>
        <Input type="range" name="range" id="exampleRange" />
      </FormGroup>
      <FormGroup check>
        <Input id="InputType-radio" type="radio" />
        <Label check htmlFor="InputType-radio">
         Send me automatic market updates.
        </Label>
      </FormGroup>
     
    </Form>
  );
}

export default Example;