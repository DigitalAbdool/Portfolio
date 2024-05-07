import React from "react";
import "./Hero.css";

/*
function HeroSection() {
    return (
        <div className="hero--container">
            <div className="hero">
                <div className="hero--text">
                    <h1>Abdulazeez Kabir</h1>
                    <h3>I am a <b>Frontend Developer</b> passionate about turning ideas into standard products</h3>
                    <button>Contact Me</button>
                </div>
                <div className="hero--img">
                    <img src="../Assets/Mypic.JPG" alt="HeroImage" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;

*/

function HeroSection(){
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--box">
                    <div className="hero--section--content">
                        <p className="hero--sectiion--intro"> I am Abdulazeez Kabir</p>
                        <h1 className="hero--section--stack">
                            <span className="hero--section--stack--color">Frontend Developer</span>
                        </h1>
                        <p className="hero--section--description">I Turn Ideas Into Standard Scalable Products</p>
                    </div>
                    <button className="btn btn--primary">Contact Me</button>
                </div>
                <div className="hero--section--img">
                    <img src="../Assets/Mypic.JPG" alt="hero--img"/>
                </div>
        </section>
    )
}

export default HeroSection;