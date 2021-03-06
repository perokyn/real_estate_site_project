import React, { useState, useEffect } from 'react';
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


import postStore from "../stores/postStore";
import { getProperties } from "../actions/postActions";




const Home = () => {

    const [propertyData, setPropertyData] = useState(postStore.getProperties())
    const [chatWindows, setChatWindows] = useState([])


    useEffect(() => {


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

console.log("chatwindows length",chatWindows.length)


    if (chatWindows.length > 0) { console.log('State array', chatWindows) }


    return (


        <div>

            <Header />
            <About />
            <Services />
            <UserTestimonies />sectionTitle
            <SearchBar />
            <PropertyList onClick={(e) => handOpenNewChat(e)} propertyData={propertyData} />
COntent

<div className='chat_main_window'>
    
            {chatWindows && <Row>

                <Col sm={2}>
                    fejek
                </Col>

                <Col className='d-flex'>
                {chatWindows.map((windows, key) => (

                    <div onClick={() => { closeChatWindow(windows.user.id) }} key={key}>
                        
                   <ChatComponent data={windows}/>
                    </div>

                ))}
</Col>
            </Row>}
            </div>

        </div>
    )
}







export default Home