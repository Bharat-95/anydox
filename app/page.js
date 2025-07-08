import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-full"
      >
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src="/Bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  )
}

export default page