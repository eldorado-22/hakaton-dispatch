import React from 'react';
import "./style.scss";
import logo from "./../../images/logo.svg"
import glob from "./../../images/global-search.svg"
import call from "./../../images/call.svg"
import tell from "./../../images/tell.svg"
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <img src={logo} alt="img"/>
                        <div></div>
                    </div>
                    <div className="header--social">
                        <div className="header--social__message">
                            <img src={tell} alt="img" width={33}/>
                            <a href="tel:+996(708)-229-173">+996(708)-229-173</a>
                        </div>
                        <div className="header--social__message">
                            <img src={call} alt="img"/>
                            <a href="tel:+996(708)-229-173">+1510-455-5262</a>
                        </div>
                        <div className="header--social__message">
                            <img src={glob} alt="img"/>
                            <p>
                                <a href="https://goo.gl/maps/HceyhkP3fRAaG9u76">WWW.USDISCORP.COM</a>
                            </p>
                        </div>
                    </div>
                    <div className="header--media">
                        <FaFacebookF className="facebook"/>
                        <AiFillInstagram fontSize={22} className="instagram"/>
                        <FaTelegramPlane className="telegram"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;