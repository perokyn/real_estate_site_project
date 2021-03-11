import React from 'react';
import {
    Form, FormGroup, Label, Input, FormText, Row, Col, Media,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
const Example = (props) => {
    return (
        <Card className='mt-5 mb-5 pb-5'>

            <CardBody>
                <CardTitle className='sectionTitle mt-5'>Get in touch</CardTitle>
                
                        

                <Row>


                    <Col className='mt-2' xs={12} md={6}>
                    <div className="d-flex justify-content-center">
                    <h4 className='text-primary'>Your Business Partner</h4>
</div>
                        <Card>

                            <CardImg top style={{ width: '12rem', height: '12rem', margin: 'auto', borderRadius: '50%' }} src="/assets/images/u1.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>

                    </Col>


                    <Col xs={12} md={6}>
                    <div className="d-flex justify-content-center">
                    <h4 className='text-primary '>Contact Form</h4>
                        </div>
                                <Form>

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
                           

                    </Col>



                </Row>
            </CardBody>
        </Card>
    );
}

export default Example;