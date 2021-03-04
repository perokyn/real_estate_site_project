import React, { useState, useEffect } from 'react';
import Header from './Header'
import SearchBar from './SearchBar'
import Services from './ServiceCards'
import UserTestimonies from './UserTestimonies'
import About from './About'
import PropertyList from './PropertyList'



import postStore from "../stores/postStore";
import { getProperties } from "../actions/postActions";




const Home =()=>{

const[propertyData,setPropertyData]=useState(postStore.getProperties())

useEffect(()=>{


    postStore.addChangeListener(onChange);

    if (postStore.getProperties().length === 0) getProperties();
    return () => postStore.removeChangeListener(onChange);


})


function onChange() {
    setPropertyData(postStore.getProperties());

}


    return(


<div>

<Header/>
<About/>
<Services/>
<UserTestimonies/>sectionTitle
<SearchBar/>
<PropertyList propertyData={propertyData}/>
COntent
</div>
    )
}







export default Home