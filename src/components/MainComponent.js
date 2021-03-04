import React from 'react';
import NavBar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom';

const Main =()=>{

    return(


<div>
<NavBar/>
<Switch> 
    <Route path='/home' component={Home} />
<Redirect to='/home' /> 
</Switch>
<Footer/>

</div>
    )
}







export default Main