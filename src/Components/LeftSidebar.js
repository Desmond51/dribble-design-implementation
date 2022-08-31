import React from 'react'

export default function LeftSidebar() {
  return (
    <div className=' bg-primary' style={{display:"flex", flexDirection:"column",height:"135vh"}}>
    <i className="fa-solid fa-house-user mt-5 mx-5"> <span className='ms-3'>Home</span></i>
    <i className="fa-brands fa-cc-discover mt-5 mx-5"><span className='ms-3'>Discover</span></i>
    <i className="fa-solid fa-arrow-up-right-dots mt-5 mx-5"><span className='ms-3'>Popular</span></i>
    <i className="fa-brands fa-twitter mt-5 mx-5"> <span className='ms-3'>Following</span></i>
    <i className="fa-solid fa-face-nose-steam mt-5 mx-5"><span className='ms-3'>Streaming</span></i> <hr />
    <i className="fa-solid fa-rectangle-history mt-5 mx-5"><span className='ms-3'>History</span></i>
    <i className="fa-solid fa-circle-heart mt-5 mx-5"><span className='ms-3'>Liked</span></i> <hr />
    <i className="fa-solid fa-gear mt-5 mx-5 mb-5"><span className='ms-3'>Setting</span></i>
    
    </div>
  )
}
