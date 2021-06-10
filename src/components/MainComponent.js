import React from 'react';
import NavBar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import PropertyPage from '../pages/PropertyPage'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        properties: state.properties,
      
    };
};

const Main =()=>{

    return(


<div>
<NavBar/>
<Switch> 
    <Route path='/home' component={Home} />
    <Route path="/property/:id" component={PropertyPage } />
    <Redirect to='/home' /> 
</Switch>
<Footer/>

</div>
    )
}







export default (connect(mapStateToProps)(Main));