import React  from'react'
import PorpertyCard from './PorpertyCard'

import {Container,  Row, Col } from 'reactstrap';

const ChatList= props=>{

console.log("data from store",props.propertyData)

    return(

<Container>
    <Row>
{props.propertyData.map(property=>(
<Col xs={12} sm={6} key={property.id}>

<PorpertyCard onClick={props.onClick} property={property}/>
 </Col>

))}

</Row>
</Container>
    )
}
export default ChatList
