import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col, Media,CardImgOverlay } from 'reactstrap';
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BiBath, BiBed, BiDollarCircle } from "react-icons/bi";
import {ShareModule} from './ShareModule'
import { Link, useHistory } from "react-router-dom"
import u3 from '../assets/images/u3.jpg'


import ReactStars from "react-rating-stars-component"; //<---see src@: https://www.npmjs.com/package/react-rating-stars-component
const PorpertyCard = (props) => {


    const history = useHistory()
    const handleClick = () => {

        history.push(`/property/${props.property.id}`)
      console.log('Clicked with id:', props.property.id)
    }


    return (
        <div>

            <Card  >
                                <div onClick={handleClick}  style={{cursor:'pointer'}}  >
                <CardImg   top width="100%" src={props.property.property.data.ImageUrl}  />
                <CardImgOverlay><ShareModule/></CardImgOverlay>
                </div>
                <CardBody >
                <Row className='d-flex '>
                <Col className='col-5 '>
                    <CardTitle  tag="h5">{props.property.property.data.propertyType}
                    </CardTitle>
                    </Col>
                    <Col className='col-6 d-flex '> 
                    <CardText >
                        <small className="text-muted pr-3 align-bottom">What members say: </small>
                        
                    </CardText>
                    
                    <ReactStars
                         count={5}
                         value={4}
                         size={24}
                         edit={false}
                        activeColor="#ffd700"
                              />
                    </Col>
                    
                    
                    </Row>
                    <CardText className='text-muted'>{props.property.property.address.city}   {props.property.property.address.addressLine1}  CA</CardText>
                    <CardText >{props.property.property.data.description}</CardText>
                    <Row className='d-flex '>
                        <Col className='col-2 '>
                            <CardText><BiBed style={{ fontSize: '1.5rem', color:'gray' }} /> <span className="align-middle">{props.property.property.data.numberBedrooms}</span> </CardText>
                        </Col>
                        <Col className='col-2 '>
                            <CardText><BiBath style={{ fontSize: '1.5rem', color:'gray' }} /> <span className="align-middle">{props.property.property.data.numberBaths}</span></CardText>
                        </Col>
                        <Col className='col-4'>
                            <CardText><BiDollarCircle style={{ fontSize: '1.5rem', color:'gray' }} /> <span className='text-info align-middle'>{props.property.property.data.price}</span></CardText>
                        </Col>
                    </Row>
                    <CardText>
                        <small className="text-muted">24 Days on the market</small>
                        
                    </CardText>
                     

                    <Row className='text-white p-2 bg-secondary' >
                        <Col >
                            <Media>
                                <Media className='d-flex'>
                                    <Media left >
                                        <Media object style={{ width: '5rem', height: '5rem', margin: 'auto', borderRadius: '50%' }} src={u3} alt="Card image cap" />
                                        <Media>{props.property.property.user.firstName} {props.property.property.user.lastName}</Media>
                                        <Media style={{ fontSize: '2rem' }}><AiOutlineMessage id={props.property.property.id} onClick={e => { props.onClick(e) }} style={{ marginRight: ".5rem", cursor: 'pointer' }} />
                                            < AiOutlineMail style={{ marginLeft: '.5rem', cursor: 'pointer' }} /></Media>

                                    </Media>
                                    <Media body className="pl-2"> 
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
