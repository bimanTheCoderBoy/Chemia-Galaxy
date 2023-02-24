import React from 'react'
import "./index.css"
import { HashLink as Link } from 'react-router-hash-link';
const Navbar= () =>{
  return (
    
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary " style={{boxShadow:"0 0 10px grey"}}>
    <div class="container-fluid " >
      <a class="navbar-brand" href="#">
      <div >
      <img src="img/logo1.png" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}  /></div></a>
      <h4 className='cardUtill' style={{color:"rgb(133, 0, 69)"}}>Chemia Galaxy</h4>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
     
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto" >
          <li class="nav-item">
          <Link to="/#exams" class="nav-link active">Exams</Link>
            
          </li>
         
          <li class="nav-item">
          <Link to="/#about" class="nav-link">About</Link>
           
          </li>
          <li class="nav-item">
          <Link to="/procedure" class="nav-link">procedure</Link>
            
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
