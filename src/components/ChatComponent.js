import React from 'react';

import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, FormGroup, Row, Input, Form, Col, Media
} from 'reactstrap';




const ChatComponent = (props) => {



    return (
        <div className='m-1 '>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.data.property.description}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">price: {props.data.property.price}</CardSubtitle>
               
                <Form>
                    <Row className='mb-3'>

                        <Col >
                            <div  className='chat_window'>
                                <Media className='mb-3'>
                                    <Media left >
                                        <Media object style={{ width: '2rem', height: '2rem', margin: 'auto', borderRadius: '50%',marginLeft:'1rem'}} src="/assets/images/u1.jpg" alt="Card image cap" />

                                    </Media>
                                    <Media className='chat_text'>How can I help you?</Media>
                                </Media>

                            </div>
                        </Col>
                    </Row>

                    <FormGroup row>

                        <Col  className='d-flex align-items-center'>
                            <Input type="input" name="email" id="exampleEmail" placeholder="Aa" />
                         <AiOutlineSend style={{fontSize:'2rem',color:'blue', marginLeft:'1rem'}}/>
                        </Col>
                    </FormGroup>
                </Form>
               

            
                    <CardLink href=""> <small>Save Conversation</small></CardLink>
                    <CardLink href=""><small>Email Conversation</small></CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default ChatComponent