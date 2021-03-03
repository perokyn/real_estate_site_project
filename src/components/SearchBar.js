
import React from 'react';

const SearchBar=(props)=>{

return(
    
    <div className='row p-3'>

<div className='col-12 col-md-4'>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">City</label>
  </div>

  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>


  </div>


  <div className='col-12 col-md-4'>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect02">Bedroom</label>
  </div>
  
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>
  </div>



  <div className='col-12 col-md-4'>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Price Range</label>
  </div>
  
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>


  </div>




  </div>






)

}


export default SearchBar