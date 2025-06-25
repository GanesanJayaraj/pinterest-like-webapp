import { buildSrc, Image } from '@imagekit/react'
import React, { useCallback, useState } from 'react'
import './ImageComponent.css'
const ImageComponent = ({ item, showPlaceholder, hidePlaceholder }) => {

  // const ENDPOINT = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT

  // const [showPlaceholder, setShowPlaceholder] = useState(true);

  // const hidePlaceholder = () => setShowPlaceholder(false);

  const onLoad = () => {
    console.log("first");
    hidePlaceholder()
  }
  const onError = () => {
    console.log("sec")
  }
  const imgRef = useCallback((img) => {
    if (!img) return; // unmount

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);

  const optimizedHeight = (350 * item.height) / item.width;
  return (
    <Image
      className='main-img'
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={item.media}
      loading="lazy"
      width={350}
      height={optimizedHeight}
      ref={imgRef}
      onLoad={onLoad}
      onError={onError}

      alt={item.alt || "media"}
      transformation={[{
        width: 350, quality: 50
      }]}
      style={showPlaceholder ? {
        backgroundImage: `url(${buildSrc({
          urlEndpoint: `${import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}`,
          src: `${item.media}`,
          transformation: [
            // {}, // Any other transformation you want to apply to the placeholder image
            {
              quality: 10,
              blur: 90,
            },
          ]
        })})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      } : {
      }}
    />
  )
}

export default ImageComponent