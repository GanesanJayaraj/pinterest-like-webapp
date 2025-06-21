import "./RightComp.css";

const RightComp = () => {
  return (
    <div className="right-comp-container">
      <div className="top">
        <div className="input-box">
          <img src="general/search.svg" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile">
          <div>
            <img className="avatar" src="general/noAvatar.png" alt="No pic" />
          </div>
          <div>
            <img className="avatar-more" src="general/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        Full
      </div>
    </div>
  )
}

export default RightComp