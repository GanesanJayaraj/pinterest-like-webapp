import { Image } from "@imagekit/react";
import Gallery from "../gallery/Gallery";
import "./RightComp.css";

const RightComp = () => {
  return (
    <div className="right-comp-container">
      <div className="top">
        <div className="input-box">
          <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src="general/search.svg" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile">
          <div>
            <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} className="avatar" src="general/noAvatar.png" alt="No pic" />
          </div>
          <div>
            <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} className="avatar-more" src="general/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <Gallery />
      </div>
    </div>
  )
}

export default RightComp