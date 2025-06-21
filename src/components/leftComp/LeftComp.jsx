import logo from "/general/logo.png";
import home from "/general/home.svg";
// import settings from "/general/settings.svg";
import create from "/general/create.svg";
import updates from "/general/updates.svg";
import messages from "/general/messages.svg";
import settings from "/general/settings.svg";
import "./LeftComp.css";

const LeftComp = () => {
    return (
        <div className="left-comp-container">
            <div className="top">
                <a href="" className="logo">
                    <img src={logo} alt="" />
                </a>
                <a href="">
                    <img src={home} alt="" />
                </a>
                <a href="">
                    <img src={settings} alt="" />
                </a>
                <a href="">
                    <img src={create} alt="" />
                </a>
                <a href="">
                    <img src={updates} alt="" />
                </a>
                <a href="">
                    <img src={messages} alt="" />
                </a>
            </div>
            <div className="bottom">
                <a href="">
                    <img src={settings} alt="" />
                </a>
            </div>
        </div>
    )
}

export default LeftComp