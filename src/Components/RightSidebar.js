import React from 'react'
import { Navbar} from "react-bootstrap";

import image1 from "../assets/image1.webp";
import image3 from "../assets/image3.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

export default function RightSidebar() {
  return (
    <div>
    <div className='my-5' style={{display:"flex", flex:"row",height:"50px",alignItems:"center"}}>
  <img cla src={image1} alt="" style={{borderRadius:"150px", width:"52px",height:"50px"}} />
  <h2 style={{marginLeft:"10px",fontSize:"20px"}}>Desmond Tekum</h2>
 
    </div>
    <Navbar bg="light" variant={"light"} style={{display:"flex",flexDirection:"row"}}>
    <h2 className='p-3' style={{backgroundColor: "gray"}}>Live</h2>
    <h2  className='p-3'>Popular</h2>
    <h2 className='p-3'> Latest</h2>
    </Navbar>
    <div style={{display:"flex",flexDirection:"row"}}>
    <h2>Top Live</h2>
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"180px",width:"60px",height:"25px"}}> All</button>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <img  src={image3} alt="code" style={{height:"80px",width:"150px",borderRadius:"10px", margin:"20px"}} />
    <div style={{display:"flex",flexDirection:"column", marginTop:"20px"}}>
    <h2> Brand Strategy</h2>
    <p> Desmond Tekum</p>
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <img  src={image9} alt="code" style={{height:"80px",width:"150px",borderRadius:"10px", margin:"20px"}} />
    <div style={{display:"flex",flexDirection:"column", marginTop:"20px"}}>
    <h2> UX Learning</h2>
    <p> Cedric Namkat</p>
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <img  src={image8} alt="code" style={{height:"80px",width:"150px",borderRadius:"10px", margin:"20px"}} />
    <div style={{display:"flex",flexDirection:"column", marginTop:"20px"}}>
    <h2> Product Marketing</h2>
    <p> Cliff Nji & Gilbert Tima</p>
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <img  src={image1} alt="code" style={{height:"80px",width:"150px",borderRadius:"10px", margin:"20px"}} />
    <div style={{display:"flex",flexDirection:"column", marginTop:"20px"}}>
    <h2> Poster Design Photoshop</h2>
    <p>Silas Akoneh</p>
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <img  src={image3} alt="code" style={{height:"80px",width:"240px",borderRadius:"10px", margin:"20px"}} />
    <div style={{display:"flex",flexDirection:"column", marginTop:"20px"}}>
    <h2>Project Management </h2>
    <p>Mr. Fongoh Martin </p>
    </div>
    </div>
    </div>
  )
}
