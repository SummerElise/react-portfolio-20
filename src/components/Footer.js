
import React from "react"
import data from "../"


const Footer = () => {
    return (
    <div className="section" id="contact">
      <div className="container">
      

 <div className="social-icons">
 {data.social.map((socialLink, index) => (
   <a
     key={index}
     href={'https://github.com/SummerElise'}
     target="_blank"
     rel="noopener noreferrer"
   >
     <img src={socialLink.img} alt="icons"></img>
   </a>
 ))}
</div>
<span>
Created by{" "}
<a href="https://github.com/SummerElise">Summer Milner</a>
</span>
</div>
</div>
    )};
 
export default Footer