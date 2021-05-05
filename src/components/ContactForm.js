import React, {useState} from 'react';
import {
    Form, FormGroup, Label, Input, FormText, Row, Col, Media,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import u1 from '../assets/images/u1.jpg'


const Example = (props) => {

    const[rvalue, setrangeValue]=useState(0)

const rangeValue=()=>{

   // console.log("value",document.getElementById('inputRange').value )
setrangeValue(document.getElementById('inputRange').value )

}    
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

                            <CardImg className="mt-5" top style={{ width: '12rem', height: '12rem', margin: 'auto', borderRadius: '50%' }} src={u1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Ellen Ripley</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Owner</CardSubtitle>
                                <CardText>Please get in touch with me with your offer. I am looking forward to make a deal with you.</CardText>
                                <Row className='text-white p-2 bg-secondary' >
                        <Col >
                            <Media body>
                                <Media  >
                                    
                                                                              
                                     < AiOutlineMail style={{fontSize:'2rem', marginLeft: '.5rem', cursor: 'pointer' }} />
                                        <Media heading>
                                            <small>&nbsp;ellen.ripley@wyutani.com</small>
                                        </Media>
                                        </Media>
                                        <Media  >                         
                                        < AiOutlineMessage style={{fontSize:'2rem', marginLeft: '.5rem', cursor: 'pointer' }} />
                                        <Media heading>
                                            <small>&nbsp;direct chat</small>
                                        </Media>
                                     
                                            
                                        </Media>

                               
                            </Media>
                        </Col>
                    </Row>
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
                                            Please upload your offer file in pdf or word format.
                                        </FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="exampleRange">Your offer: <span className="text-primary">${rvalue}</span>  </Label>
                                        <Input type="range" name="range" id="inputRange" 
                                        min="125000" max="450000" onChange={(e)=>rangeValue(e)}/>
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