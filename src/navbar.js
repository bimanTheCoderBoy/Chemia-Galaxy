import React from 'react'
import "./index.css"
const Navbar= () =>{
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary " style={{boxShadow:"0 0 10px grey"}}>
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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
