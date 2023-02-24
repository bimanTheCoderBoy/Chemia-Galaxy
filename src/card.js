import React from 'react';
import Data from './cardData' ;
import { useState } from 'react';
import "./index.css"
import {IoLogoWhatsapp} from "react-icons/io";
import {FaShare} from "react-icons/fa";
import Style from "./Footer.module.css"

const Card= ()=> {
    // <!-- Button trigger modal -->
    const [name, setName] = useState("");
    const [clas, setClas] = useState("");
    const [email,setEmail] =useState("sanjoys014@gmail.com");
   function validNumber(number) {
    if (number.length()!=10) {
      
    }
   }
  
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
      <form action={`https://formsubmit.co/${email}`} method="post" class="contact-form">
      <div class="form-group">
    <label for="ExamName">Exam Name:</label>
    <input type="text" id="ExamName" name="ExamName" value={name} onChange={(e) => setName(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="class">Class:</label>
    <input type="text" id="class" name="class" value={clas} onChange={(e) => setClas(e.target.value)} required/>
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
    <input type="tel" pattern="[6789][0-9]{9}" id="number" name="number" required/>
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
    <button type="submit" class="btn-submit">Join Exam</button>
  </div>

      
     
      </form>
    </div>
    </div>
  </div>
</div>
    <div class="one" id='exams'>
  <h1>Exams</h1>
</div>
    <div className='container-fluid'>
  
   <div className="row">
    {
   Data.map((e)=>(
    <div className="col-md-3">
    <div className="wrap" style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}>
    <div class="card  mt-5 ms-0 me-0" style={{width: "21rem" ,boxShadow:"0 0  20px rgba(0,0,0,.3)"}}>
        <img src={e.img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"><span className='cardUtill'>Name :</span> {e.name}</h5>
            <p class="card-text"><span className='cardUtill'>Class :</span> {e.class}</p>
            <p class="card-text"><span className='cardUtill'>Sllybus :</span> {e.sllybus}</p>
            <p class="card-text"><span className='cardUtill'>Full Mark :</span> {e.fullmark}</p>
            <p class="card-text"><span className='cardUtill'>Fee :</span> {e.fee}</p>
            <p class="card-text"><span className='cardUtill'>Time :</span> {e.duration}</p>
            <p class="card-text"><span className='cardUtill'>Date :</span> {e.date}</p>
            <p class="card-text"><span className='cardUtill'>Last date of joining :</span> {e.lastDate}</p>
            <p class="card-text"><span className='cardUtill'>1ST Prize :</span> {e.prize1}</p>
            <p class="card-text"><span className='cardUtill'>2ND Prize :</span> {e.prize2}</p>
            <p class="card-text"><span className='cardUtill'>3RD Price :</span> {e.prize3}</p>
            <p class="card-text"><span className='cardUtill'>Other Price :</span> {e.sprice}</p>
            <p class="card-text"><span className='cardUtill'>Other Details :</span> {e.description}</p>

         <div style={{width:"100%",display:"flex",justifyContent: "space-between"}}>
         <div style={{paddingTop:"1rem"}}>
            <a href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(ee) =>{ 
              setName(e.name);
              setClas(e.class);
            if(e.class=="XII"){
              
              setEmail("sanjoys014@gmail.com");
              console.log("XII");
            }else{
              setEmail("chemiagalaxy2023@gmail.com");
              console.log("XI");
            }}}>Enroll</a>
            </div>
            <div >
            <a href={`whatsapp://send?text=Hi, I am interested about the exam [${e.name}]&phone=+919593610777`} ><span className={Style.icon}style={{fontSize:"2.5rem"}}><IoLogoWhatsapp/></span></a>
            <a href="whatsapp://send?text=https://chemiagalaxy.netlify.app/" 		data-action="share/whatsapp/share"
		target="_blank" style={{fontSize:"2.5rem",marginLeft:"2rem"}}><FaShare/>  </a> 
        </div>
        </div>
           {/* <div className="center"  style={{display:'flex', width:"100%",justifyContent:"center",alignItems:'center'}}> 
           </div> */}
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
