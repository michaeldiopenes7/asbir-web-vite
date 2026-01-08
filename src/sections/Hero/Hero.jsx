import React from 'react';
import chipIcon from '../../assets/icons/ChipIcon.svg';
import linesSvg from '../../assets/images/Lines.svg';
import pixelMask from '../../assets/images/Pixels Mask.svg';
import gradientBg from '../../assets/images/gradientbg.webp';
import Partners from '../Partners/Partners';
import './Hero.css';

const Hero = () => (
    <section className="hero" id="hero">
        <div className="hero-lines-container">
            <img src={linesSvg} alt="" className="hero-lines-svg" loading="eager" aria-hidden="true" width="100%" height="100%" />
        </div>
        <div className="pixel-mask-container">
            <img src={pixelMask} alt="" className="pixel-mask-svg" loading="eager" aria-hidden="true" width="100%" height="100%" />
        </div>
        <div className="hero-gradient-img-container">
            <img
                src={gradientBg}
                alt="Modern IT abstract background gradient"
                className="hero-gradient-img"
                loading="eager"
                fetchpriority="high"
                aria-hidden="false"
                width="1200"
                height="800"
            />
        </div>
        {/* <div className="dot-grid"></div> */}
        <div className="container hero-content animate-fade-in">
            <div className="badge">
                <img src={chipIcon} alt="" className="badge-icon" width="14" height="14" /> Web Development and IT Consulting
            </div>
            <h1>
                Modern Problems Require <br />
                <span className="clipped-text">Test</span>
            </h1>
            <p className="hero-subtext">
                We take our time in understanding the IT needs of businesses and provide a
                modern approach to the solution. Our services enable businesses to scale,
                transform, and gain a competitive advantage.
            </p>
            <div className="hero-btns">
                <button className="btn-contact">
                    Contact Us
                    <span className="arrow-icon">→</span>
                </button>
            </div>
        </div>
        <Partners />
    </section>
);

export default Hero;
