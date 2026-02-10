import React from 'react';
import logo from '../../assets/logos/asbir-logo.svg';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={logo} alt="AsbirTech - Web & Mobile Development Solutions" className="footer-logo" width="120" height="30" loading="lazy" />
                    <span className="copyright">© 2021 AsbirTech, Inc.</span>
                </div>
                <div className="footer-right">
                    <span className="flag-icon">🇵🇭</span>
                    <span className="location-text">Dumaguete, PH</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
