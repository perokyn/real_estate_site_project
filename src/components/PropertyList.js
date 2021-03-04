import React  from'react'
import PorpertyCard from './PorpertyCard'



const PropertyList=props=>{





console.log("data from store",props.propertyData)



    return(

<div>
{props.propertyData.map(property=>(
<div key={property.id}>

<PorpertyCard property={property}/>
 </div>

))}


</div>

    )
}

export default PropertyList
