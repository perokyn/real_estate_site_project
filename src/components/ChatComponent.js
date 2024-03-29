import React, { useState, } from 'react';
import ChatFunction from './ChatFunction'
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, FormGroup, Row, Input, Form, Col, Media
} from 'reactstrap';
import u1 from '../assets/images/u1.jpg'



const ChatComponent = (props) => {
const[info, setInfo]=useState("")

const shwoInfo=()=>{

    setInfo(` Will download an example html file`)
}
const hideInfo=()=>{

    setTimeout(()=>{setInfo('')},2000)
}
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

                <CardText className='text-center'>
                    <iframe width="300" height="400" src="https://attilawolf.info/react_chat/" title="chat"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>

                </CardText>


                <Row>
                    <Col className="mb-3" >
                        <CardLink className="p-3" href="data:application/xml;charset=utf-8,example conversation file" download="filename.html" onMouseOver={()=>shwoInfo()} onMouseOut={()=>hideInfo()}><small>Save Conversation</small></CardLink>
                        <CardLink className="p-3" href="mailto:"><small>Email Conversation</small></CardLink>
                        <CardText className='pl-3 bg-warning text-muted'>{info} </CardText>
                    </Col>
                </Row>


            </Card>
        </div>
    );
};

export default ChatComponent