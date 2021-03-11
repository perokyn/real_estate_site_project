import React  from'react'
import PorpertyCard from './PorpertyCard'

import {Container,  Row, Col } from 'reactstrap';

const PropertyList=props=>{





console.log("data from store",props.propertyData)



    return(

    
<Container fluid style={{height:'500px',overflowY: "scroll"}}>
    
    <Row>
{props.propertyData.map(property=>(
<Col xs={12}key={property.id} >

<PorpertyCard onClick={props.onClick} property={property}/>
 </Col>

))}

</Row>
</Container>

    )
}

export default PropertyList
