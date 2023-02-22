import React from 'react'
import "./index.css"
const  About=()=> {
  return (
    <div className='m-2 ' id='about' style={{boxShadow:"0 0 10px rgba(0,0,0,.2)",borderRadius:"7px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
         <div class="one mt-2">
  <h1>About</h1>
</div>

<div className="row " style={{width:"95%",}}>
    
    <div className="col-12 col-md-6 mb-3" style={{backgroundColor:"rgba(0,0,0,.1)",borderRadius:"7px"}} >
    Chemia Galaxy is a offline tution platform for chemistry for class 11,12.
    Classes specially for NEET and JEE are also be taught here.Our location is college para raiganj, Uttar Dinajpur
    
    </div>
    <div className="col col-md-6 mb-3" style={{borderRadius:"7px"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7195.943829600487!2d88.12865492488004!3d25.605849484830706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fad500b8808723%3A0x763e0e1180edf980!2sCollege%20Para%2C%20Raiganj%2C%20West%20Bengal%20733134!5e0!3m2!1sen!2sin!4v1677094203214!5m2!1sen!2sin"  width="100%"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
    </div>
  )
}
export default About
