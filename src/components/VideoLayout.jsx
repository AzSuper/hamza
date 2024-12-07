import React from 'react'

const VideoLayout = ({src}) => {
    console.log(src)
  return (
    <video  
    loop
    muted
    autoPlay
    playsInline>
  <source src={src} type="video/mp4"/>
  {/* <source src={src} type="video/ogg"/> */}
</video>
  )
}

export default VideoLayout
  

  