import React, { useState, } from 'react';
import ChatFunction from './ChatFunction'
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, FormGroup, Row, Input, Form, Col, Media
} from 'reactstrap';
import u1 from '../assets/images/u1.jpg'



const ChatComponent = (props) => {

    return (
        <div className='m-1' style={{ width: '20rem' }}>
            <Card>
                <CardText className="bg-secondary text-sm-right pt-2 pb-2 pr-3 text-white rounded-top">
                    <i class="fa fa-window-minimize pr-3" aria-hidden="true"></i>
                    <i class="fa fa-window-close pr-2" aria-hidden="true"
                        onClick={props.close}
                    ></i>
                </CardText>

                <CardTitle tag="h5" className="pl-3">{props.data.property.propertyType}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 pl-3 text-muted">price: {props.data.property.price}</CardSubtitle>



                <CardText >
                    <iframe width="320" height="400" src="http://www.visualvicinity.com/reactchat/" title="chat" ></iframe>

                </CardText>





                <Row>
                    <Col className="mb-3" >
                        <CardLink className="p-3" href=""> <small>Save Conversation</small></CardLink>
                        <CardLink className="p-3" href=""><small>Email Conversation</small></CardLink>
                    </Col>
                </Row>


            </Card>
        </div>
    );
};

export default ChatComponent