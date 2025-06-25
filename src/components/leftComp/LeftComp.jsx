import logo from "/general/logo.png";
import home from "/general/home.svg";
// import settings from "/general/settings.svg";
import create from "/general/create.svg";
import updates from "/general/updates.svg";
import messages from "/general/messages.svg";
import settings from "/general/settings.svg";
import "./LeftComp.css";
import { Image } from "@imagekit/react";
import { Link } from "react-router";

const LeftComp = () => {
    return (
        <div className="left-comp-container">
            <div className="top">
                {/* <a href="" > */}
                <Link to={'/'} className="logo">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/logo.png"} alt="" />
                </Link>
                {/* </a> */}
                <a href="">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/home.svg"} alt="" />
                </a>
                <a href="">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/settings.svg"} alt="" />
                </a>
                <a href="">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/create.svg"} alt="" />
                </a>
                <a href="">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/updates.svg"} alt="" />
                </a>
                <a href="">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/messages.svg"} alt="" />
                </a>
            </div>
            <div className="bottom">
                <a href="">
                    <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src={"/general/settings.svg"} alt="" />
                </a>
            </div>
        </div>
    )
}

export default LeftComp