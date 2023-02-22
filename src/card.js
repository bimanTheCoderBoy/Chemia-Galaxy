import React from 'react';
import Data from './cardData' ;
import { useState } from 'react';
import "./index.css"

const Card= ()=> {
    // <!-- Button trigger modal -->
    const [name, setName] = useState("");
  
  return (
    
    <div className="wrap">
    <div className='container'>

   
<div className="mt-3 row onlyMobile">
    <div className="col-6">
        <img src="img/d2.png" alt=""  height="200px" width="200px"  />
    </div>
    <div className="col-6">
        <img src="img/d1.png" alt="" height="180px" width="180px" />
    </div>
</div>
 </div>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Exam joining form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="https://formsubmit.co/sanjoys014@gmail.com" method="post" class="contact-form">
      <div class="form-group">
    <label for="name">Exam Name:</label>
    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"  required/>
  </div>
  
  {/* <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
  </div> */}
  <div class="form-group">
    <label for="phone">Phone:</label>
    <input type="tel" id="number" name="number" required/>
  </div>
  <div class="form-group">
    <label for="school">School:</label>
    <input type="text" id="school" name="school" required/>
  </div>
 
  <div class="form-group">
    <label for="Address">Address:</label>
    <textarea id="Address" name="Address" required></textarea>
  </div>
  
  <div class="form-group" style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}>
    <button type="submit" class="btn-submit">Send</button>
  </div>

      
     
      </form>
    </div>
    </div>
  </div>
</div>
    <div class="one">
  <h1>Exams</h1>
</div>
    <div className='container-fluid'>
  
   <div className="row">
    {
   Data.map((e)=>(
    <div className="col-md-3">
    <div className="wrap" style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}>
    <div class="card  mt-5 ms-0 me-0" style={{width: "18rem" ,boxShadow:"0 0  20px rgba(0,0,0,.3)"}}>
        <img src="https://img.freepik.com/free-vector/science-lab-with-elements_23-2148496412.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"><span className='cardUtill'>Name :</span> {e.name}</h5>
            <p class="card-text"><span className='cardUtill'>Sllybus :</span> {e.sllybus}</p>
            <p class="card-text"><span className='cardUtill'>Duration :</span> {e.duration}</p>
            <p class="card-text"><span className='cardUtill'>Date :</span> {e.date}</p>
            <p class="card-text"><span className='cardUtill'>Last date of joining :</span> {e.lastDate}</p>

           <div className="center"  style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}> <a href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(ee) => setName(e.name)}>Enroll</a></div>
        </div>
    </div>
    </div>
    </div>
   ))

    }
    </div>
    </div>
    </div>
  )
}

export default Card
