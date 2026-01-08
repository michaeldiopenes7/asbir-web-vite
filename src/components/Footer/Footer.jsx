import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <span className="logo-icon">▲</span>
                    <span>AsbirTech</span>
                </div>
                <div className="footer-copy">
                    © 2026 AsbirTech. All rights reserved.
                </div>
                <div className="footer-socials">
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                    <a href="#" aria-label="Github">Github</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
