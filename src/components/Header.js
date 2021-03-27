import React from 'react';
import header from '../assets/images/h1.jpeg'
import { Card, 
    CardImgOverlay , 
    CardImg, 
    CardTitle, 
    CardText,
     Button,


} from 'reactstrap';

const Header=props=>{


return(
<div className='mt-5' >
<Card  >

<CardImg src={header} alt='people with house key'  />

<CardImgOverlay>

          <CardTitle  className='header mt-3' > 
         <h1>MAKE AN OFFER TODAY</h1> 
          <hr/>
          <h2>Get a Deal Tomorrow!</h2>
          </CardTitle>
         
          <CardText >
          
               
               <Button className="  d-none  d-sm-block" color='info' >LEARN MORE</Button>
             
             
          </CardText>
            

        </CardImgOverlay>
</Card>
</div>
)

}


export default Header