import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col, Media } from 'reactstrap';
import { AiOutlineMail,AiOutlineMessage } from "react-icons/ai";
const PorpertyCard = (props) => {

    console.log('DATA', props.property.property.data.description)
    return (
        <div>

            <Card  >
                <CardImg top width="100%" src={props.property.property.data.ImageUrl} />
                <CardBody >
                    <CardTitle tag="h5">{props.property.property.data.propertyType}</CardTitle>
                    <CardText>{props.property.property.data.description}</CardText>
                    <CardText>{props.property.property.data.numberBedrooms}</CardText>
                    <CardText>{props.property.property.data.numberBaths}</CardText>
                    <CardText>{props.property.property.data.price}</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>


                    <Row className='text-white p-2' style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <Col >
                            <Media>
                                <Media className='d-flex'>
                                    <Media left >
                                        <Media object style={{ width: '5rem', height: '5rem', margin: 'auto', borderRadius: '50%' }} src="/assets/images/u1.jpg" alt="Card image cap" />
                                        <Media>Veronica Sims</Media>
                                        <Media style={{fontSize:'2rem'}}><AiOutlineMessage  id={props.property.property.id} onClick={e=>{props.onClick(e)}}style={{marginRight:".5rem", cursor:'pointer'}}/> 
                                        < AiOutlineMail style={{marginLeft:'.5rem', cursor:'pointer'}}/></Media>
                                        
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            <small>Get in touch</small>
                                           </Media>
                                             Send a direct email or try the chat feature below!
                                           </Media>

                                </Media>
                            </Media>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='d-flex justify-content-center mt-3'>
                            <Button className='btn btn-info'>SUBMIT AND OFFER</Button>
                        </Col>
                    </Row>
                </CardBody>

            </Card>

        </div>
    )

}

export default PorpertyCard
