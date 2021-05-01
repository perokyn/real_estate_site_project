import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col, Media, CardImgOverlay } from 'reactstrap';
import ReactStars from "react-rating-stars-component"; //<---see src@: https://www.npmjs.com/package/react-rating-stars-component
import u3 from '../assets/images/u3.jpg'
import u2 from '../assets/images/u2.jpg'
import u1 from '../assets/images/u1.jpg'




const Ratings = () => {

    return (
<Card>


<Row>
         <Col xs={12} >
          <h5 className='sectionTitle mt-5'>What our Members Say</h5>
         
        </Col>

         </Row>


<div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="d-flex flex-row align-items-center add-comment p-2 bg-white rounded">
                <img  alt="user2" class="rounded-circle" src={u1} width="40"/><input type="text" class="form-control border-0 no-box-shadow ml-1" placeholder="Leave a constructive comment..."/></div>
            <div class="p-3 bg-white mt-2 rounded">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row user"><img alt="user3" class="rounded-circle img-fluid img-responsive" src={u2} width="40"/>
                        <div class="d-flex flex-column ml-2"><span class="font-weight-bold">@Rob</span><span class="day">1 day ago</span></div>
                    </div>
                    <div class="d-flex align-items-center px-3 heart border">
                    <ReactStars
                         count={5}
                         value={4}
                         size={24}
                         edit={false}
                        activeColor="#ffd700"
                              />
                    
                        
                        </div>
                </div>
                <div class="comment-text text-justify mt-2">
                    <p>Nice neighborhood Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div class="p-3 bg-white mt-2 rounded">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row user">
                        <img alt="user2"  class="rounded-circle img-fluid img-responsive" src={u3} width="40"/>
                        <div class="d-flex flex-column ml-2"><span class="font-weight-bold">@Liuna</span><span class="day">2 days ago</span></div>
                    </div>
                    <div class="d-flex align-items-center px-3 heart border">


                    <ReactStars
                         count={5}
                         value={5}
                         size={24}
                         edit={false}
                        activeColor="#ffd700"
                              />
                


                    </div>
                </div>
                <div class="comment-text text-justify mt-2">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="d-flex justify-content-end align-items-center comment-buttons mt-2 text-right"><span class="mr-3 delete">Delete</span><button class="btn btn-success btn-sm border-0 px-3" type="button">Edit</button></div>
            </div>
            <div class="p-3 bg-white mt-2 rounded text-center">
                <h5>Join the community to comment</h5><button class="btn btn-info btn-sm px-3" type="button">Signup</button>
            </div>
        </div>
    </div>
</div>
    
    
    
</Card>


)
}


export default Ratings