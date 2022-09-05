import React from 'react'

export default function LeftSidebar() {
  return (
    <div className=' bg-primary' style={{display:"flex", flexDirection:"column",height:"135vh"}}>
    <div className='mx-5 mt-5 '>
    <h2><i className="fa-solid fa-house-user m-3"></i>Home</h2>
    </div>
    <div className='mx-5'>
    <h2><i className="fa-brands fa-cc-discover mt-5 m-3"></i>Discover</h2>
    </div>
    <div className='mx-5'>
    <h2><i className="fa-solid fa-arrow-up-right-dots mt-5 m-3"></i>Popualar</h2>
    </div>
       <div className='mx-5'>
    <h2><i className="fa-brands fa-twitter mt-5 m-3"></i>Following</h2>
    </div>
    <div className='mx-5'>
    <h2><i className="fa-solid fa-face-nose-steam mt-5 mx-5"></i>Streaming</h2>
    </div><hr />
    <i className="fa-solid fa-rectangle-history mt-5 mx-5"><span className='ms-3'>History</span></i>
    <i className="fa-solid fa-circle-heart mt-5 mx-5"><span className='ms-3'>Liked</span></i> <hr />
    <i className="fa-solid fa-gear mt-5 mx-5 mb-5"><span className='ms-3'>Setting</span></i>
    
    </div>
  )
}
