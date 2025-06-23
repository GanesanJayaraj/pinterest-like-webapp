import React from 'react'
import "./GalleryItem.css"
import share from "/general/share.svg";
import more from "/general/more.svg";

const GalleryItem = ({item}) => {
  return (
    <div className='gallery-item' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
        <img className='main-img' src={item.media} alt="Image Post" />
        <button className='button save'>Save</button>
        {/* <div style={{display: 'flex', gap: '10px'}}> */}
          <button className='button share'><img src={share} alt="" /></button>
          <button className='button more-actions'><img src={more} alt="" /></button>
        {/* </div> */}
    </div>
  )
}

export default GalleryItem