import React from 'react'
import { BsEnvelopeFill } from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import { AiFillInstagram,AiFillLinkedin,AiFillYoutube ,} from "react-icons/ai";
import Style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={Style.footerCustom}>
    <div className={Style.iconsFooter}>
          
          <a href="mailto:admin@aot.edu.in"><span className={Style.icon}><BsEnvelopeFill/></span></a>
          {/* <a href="https://www.instagram.com/aotconnect/"><span className={Style.icon}><AiFillInstagram/></span></a> */}
          <a href="whatsapp://send?text=Hi, I am interested about Chemia Galaxy&phone=+919593610777"><span className={Style.icon}><IoLogoWhatsapp/></span></a>
         
          <a href="https://youtube.com/@chemiagalaxy2335"><span className={Style.icon}><AiFillYoutube/></span></a>
        </div>
    <span>© Copyright Chemia Galaxy 2023 | All rights reserved</span>
</div>
  )
}

export default Footer
