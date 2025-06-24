import React, { useState } from 'react'
import "./GalleryItem.css"
import share from "/general/share.svg";
import more from "/general/more.svg";

const GalleryItem = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <a href='/' className={`gallery-item ${(item.media && imageLoaded) ? 'has-image' : ''}`} style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}`, padding: 0 }}>
      <img className='main-img' src={item.media} alt="Image Post"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      />
      <button className='button save'>Save</button>
      {/* <div style={{display: 'flex', gap: '10px'}}> */}
      <button className='button share'><img src={share} alt="" /></button>
      <button className='button more-actions'><img src={more} alt="" /></button>
      {/* </div> */}
    </a>
  )
}

export default GalleryItem