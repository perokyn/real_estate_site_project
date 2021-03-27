import React, { useState, useEffect,useRef } from 'react';
import Header from './Header'
import SearchBar from './SearchBar'
import Services from './ServiceCards'
import UserTestimonies from './UserTestimonies'
import About from './About'
import PropertyList from './PropertyList'
import ChatComponent from './ChatComponent'
import {
     Row, Col
} from 'reactstrap';

import $ from 'jquery'
import postStore from "../stores/postStore";
import { getProperties } from "../actions/postActions";




const Home = () => {

    const [propertyData, setPropertyData] = useState(postStore.getProperties())
    const [chatWindows, setChatWindows] = useState([])
    const [viewPortSize, setviewPortSize]=useState(window.innerWidth)

    useEffect(() => {
        
        
    window.addEventListener("resize", () => setviewPortSize(window.innerWidth));
        

        postStore.addChangeListener(onChange);

        if (postStore.getProperties().length === 0) getProperties();
        return () => postStore.removeChangeListener(onChange);


    })

    function onChange() {
        setPropertyData(postStore.getProperties());
    }


    function handOpenNewChat(e) {
        //const userId=e.target.id
        //console.log("chat icon clicked",userId)

        if (e.target.id) {
            const userData = propertyData.filter(userdata => userdata.property.id === parseInt(e.target.id))[0]


            const propertyAndUserData = {
                user: userData.property.user,
                property: userData.property.data
            }

            if (chatWindows.filter(item => item.user.id === parseInt(e.target.id))[0]) { console.log("User already included") }
            else {
                setChatWindows(oldArray => [...chatWindows, propertyAndUserData])
            }

        }

    }


    const closeChatWindow = (id) => {
        setChatWindows(chatWindows.filter(item => item.user.id !== id));
    }




//get mapped chat window if it is the third that is opened and set its position to absolute (this iswhat should be modifyed in srceens less then sm)
const chatRef=(props)=>{
   
//To DO : Convert this to a switch statement to include more window sizes

if(viewPortSize<=480 && chatWindows.length>1){
    
    $(`#${chatWindows[chatWindows.length-1].user.firstName}`).css({position: 'absolute'})
    console.log('SMALL VIEW')
}else if(viewPortSize>480 && viewPortSize<=768 && chatWindows.length>2){
 
        $(`#${chatWindows[chatWindows.length-1].user.firstName}`).css({position: 'absolute'})
    }
    
 

}





    return (


        <div>

            <Header />
            <About />
            <Services />
            <UserTestimonies />
            <div className='sectionTitle'><p>Find Property</p></div>
            <SearchBar />
            <PropertyList onClick={(e) => handOpenNewChat(e)} propertyData={propertyData} />




<div className='chat_container'>
    
            {chatWindows && <Row>

                <Col sm={2}>
                    fejek
                </Col>

                <Col className='d-flex'>
                {chatWindows.map(windows=> (

                    <div id={windows.user.firstName} ref={()=>{chatRef(windows.user.firstName)}} onClick={() => { closeChatWindow(windows.user.id) }} key={windows.user.firstName}>
                        
                   <ChatComponent setStyle={false}  data={windows}/>

                    </div>

                ))}
</Col>
            </Row>}
            </div>

        </div>
    )
}







export default Home