import React from 'react';
import Data from './cardData' ;
import "./index.css"

const Card= ()=> {
    // <!-- Button trigger modal -->

  return (
    
    <div className="wrap">


{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Exam joining form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="#" method="post" class="contact-form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
  </div>
  
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  
  <div class="form-group" style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}>
    <button type="submit" class="btn-submit">Send</button>
  </div>

      
     
      </form>
    </div>
    </div>
  </div>
</div>
    <h2 className='mt-5 ms-5'>Exams{ " >" }</h2>
    <div className='container-fluid row'>
  
   
    {
   Data.map((e)=>(
    <div className="col-md-3">
    <div className="wrap" style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}>
    <div class="card mt-5" style={{width: "18rem"}}>
        <img src={e.img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"><span className='cardUtill'>Name :</span> {e.name}</h5>
            <p class="card-text"><span className='cardUtill'>Sllybus :</span> {e.sllybus}</p>
            <p class="card-text"><span className='cardUtill'>Duration :</span> {e.duration}</p>
            <p class="card-text"><span className='cardUtill'>Date :</span> {e.date}</p>
            <p class="card-text"><span className='cardUtill'>Last date of joining :</span> {e.lastDate}</p>

           <div className="center"  style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}> <a href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll</a></div>
        </div>
    </div>
    </div>
    </div>
   ))

    }
    </div>
    </div>
  )
}

export default Card
