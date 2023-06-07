import React from 'react';
import "./hero.scss";
import tech from "../../images/tachka 1.svg"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <img src={tech} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;