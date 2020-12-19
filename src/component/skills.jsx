import React from "react";
import itPicture from "../img/IT.png";
import "../styles/background.scss";
import Rosa from "react-on-scroll-animation";


class Skills extends React.Component {
    render(){
   
     return (

         <div id="skills" style={{backgroundColor: "#333a3a",height:"100%", padding:"10px",  zIndex:999}}>
            <div id="particle-container">
               <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
                 <div className ="particle"></div>
           <Rosa animation="zoom-in"   
                 duration={300}   
                 delay={300} >  
                 <h1 style={{padding: "15px",color:"whitesmoke"}}><u>Skills</u></h1>
           </Rosa>
                 
           <Rosa animation={'fade-left'}>
       
             <div className="row no-gutters" id="aboutMe" >
             <div className="col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5">
             <img
                                 src={itPicture}
                                 alt="my picture"
               />
             </div>

             <div className="col-md-7 p-4 pl-md-4 shadow-lg p-3 mb-5">
             <ul>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Experienced with both PC and Macintosh computers. </li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Experienced with Microsoft office (Power Point, Word, Excel) and Internet.</li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Knowledge in TCP/IP networking and routing protocols. </li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Extensive network device experience.</li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Excellent skills in installing, maintaining and integrating network devices.</li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Profound understanding of LAN and WAN management and maintenance protocols.</li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Experienced with database management, RDBMS.</li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Experienced with HTML, CSS, JavaScript, SQL</li>
             </ul>
             </div>
  
             
       
         
      </div>
                 
  </Rosa>
 </div>
</div>          
                       
         

 );
}
};
export default Skills;