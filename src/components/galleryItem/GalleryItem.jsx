import React, { useCallback, useState } from 'react'
import "./GalleryItem.css"
import share from "/general/share.svg";
import more from "/general/more.svg";
import { Link } from 'react-router';
// import GalleryItem from '../galleryItem/GalleryItem'
import ImageComponent from "../imageComponent/ImageComponent";
import { Image } from '@imagekit/react';



const GalleryItem = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const ENDPOINT = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
  
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  
  const hidePlaceholder = () => setShowPlaceholder(false);
  
  // const imgRef = useCallback((img) => {
  //   console.log(img?.complete)
  //   if (!img) {
  //     setImageLoaded(false);
  //     setShowPlaceholder(true); // unmount
  //     return
  //   }
  //   if (img.complete) {
  //     hidePlaceholder();
  //     setImageLoaded(true)
  //     return;
  //   } else {
  //     setImageLoaded(false);
  //   }
  // }, []);

  return (
    <div className={`gallery-item ${(item.media && !showPlaceholder) ? 'has-image' : ''}`} style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}`, padding: 0 }}>
      {/* <img className='main-img' src={item.media} alt="Image Post"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      /> */}
      <Link to={`/pin/${item.id}`} style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} />
      <ImageComponent item={item} showPlaceholder={showPlaceholder} hidePlaceholder={hidePlaceholder}/>
      <button className='button save'>Save</button>
      {/* <div style={{display: 'flex', gap: '10px'}}> */}
      <button className='button share'><Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/share.svg"} alt="" /></button>
      <button className='button more-actions'><Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/more.svg"} alt="" /></button>
      {/* </div> */}
    </div>
  )
}

export default GalleryItem