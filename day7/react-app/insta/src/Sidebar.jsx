import React from 'react'

function Sidebar() {
  return (
    <>
   
     <div className='d-flex flex-column gap-3'>
        <img className="logo-text"  src="src\assets\instatext.png" alt="" />
        <div ><i class="bi bi-house-door"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass"></i>Explore</div>
        <div><i class="bi bi-play-btn"></i>Reels</div>
        <div><i class="bi bi-chat-dots"></i>Messages</div>
        <div><i class="bi bi-heart-fill"></i>Notifications</div>
        <div><i class="bi bi-plus-square"></i>Create</div>
        <div><i class="bi bi-person-circle"></i>Profile</div></div>
      <div><i class="bi bi-threads"></i>Threads</div>
      <div><i class="bi bi-list"></i>More</div>
    </>
  )
}

export default Sidebar