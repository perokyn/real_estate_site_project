
import React from 'react';
import { Container} from 'reactstrap';
const SearchBar=(props)=>{

return(
    <Container>
    <div className='row p-3'>

<div className='col-12 col-md-4'>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">City</label>
  </div>

  <select className="custom-select" id="inputGroupSelect01">
    <option defaultValue>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>


  </div>


  <div className='col-12 col-md-4'>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect02">Bedroom</label>
  </div>
  
  <select className="custom-select" id="inputGroupSelect02">
    <option defaultValue>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>
  </div>



  <div className='col-12 col-md-4'>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Price Range</label>
  </div>
  
  <select className="custom-select" id="inputGroupSelect01">
    <option defaultValue>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>


  </div>




  </div>





  </Container>
)

}


export default SearchBar