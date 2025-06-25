import { Image } from "@imagekit/react";
import "./RightCompTop.css";

const RightCompTop = () => {
  return (
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
  )
}

export default RightCompTop