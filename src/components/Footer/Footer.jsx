import React from 'react';
import logo from '../../assets/logos/asbir-logo.svg';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <div className="footer-brand">
                    <img src={logo} alt="AsbirTech - Web & Mobile Development" className="footer-logo" width="120" height="30" loading="lazy" />
                    <p className="footer-tagline">Expert IT solutions for modern businesses.</p>
                </div>
                <div className="footer-links-grid">
                    <div className="footer-links-col">
                        <h4>Navigation</h4>
                        <a href="#services">Services</a>
                        <a href="#about">About Us</a>
                        <a href="#team">Our Team</a>
                        <a href="#works">Portfolio</a>
                    </div>
                    <div className="footer-links-col">
                        <h4>Services</h4>
                        <a href="#services">Web Development</a>
                        <a href="#services">Cloud Consulting</a>
                        <a href="#services">Digital Transformation</a>
                    </div>
                    <div className="footer-links-col">
                        <h4>Contact</h4>
                        <a href="mailto:hello@asbirtech.com">hello@asbirtech.com</a>
                        <span className="location-text">Dumaguete, PH 🇵🇭</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-content">
                    <div className="footer-left">
                        <span className="copyright">© {new Date().getFullYear()} AsbirTech, Inc. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
