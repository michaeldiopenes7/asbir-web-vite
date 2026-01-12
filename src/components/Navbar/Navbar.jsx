import React, { useState, useEffect } from 'react';
import logo from '../../assets/logos/asbir-logo.svg';
import logomark from '../../assets/svgs/asbir-logomark.svg';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Scroll Spy Logic
        const sections = ['hero', 'services', 'about', 'team', 'works'];
        const observerOptions = {
            root: null,
            // Creates a narrow "trigger line" around 20% down from the top of the viewport.
            // A section must overlap this specific line to be considered active.
            rootMargin: '-20% 0px -79% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Function to attempt observing sections
        const tryObserve = () => {
            let foundAll = true;
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.observe(element);
                } else {
                    foundAll = false;
                }
            });
            return foundAll;
        };

        // Initial try
        if (!tryObserve()) {
            // If not all found (due to lazy loading), poll for them
            const intervalId = setInterval(() => {
                if (tryObserve()) {
                    clearInterval(intervalId); // Stop polling when all found
                }
            }, 300);

            // Safety timeout to stop polling after 10 seconds
            setTimeout(() => clearInterval(intervalId), 10000);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="nav-spacer side-spacer"></div>
                <div className="logo-wrapper">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <img
                            src={logo}
                            alt="Asbir Tech Logo"
                            className={`navbar-logo full-logo ${scrolled ? 'hidden' : ''}`}
                        />
                        <img
                            src={logomark}
                            alt="Asbir Tech Logomark"
                            className={`navbar-logo logomark ${scrolled ? '' : 'hidden'}`}
                        />
                    </a>
                </div>
                <div className="nav-spacer middle-spacer"></div>

                {/* Desktop Links */}
                <div className="nav-links">
                    <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a>
                    <a href="#team" className={activeSection === 'team' ? 'active' : ''}>Team</a>
                    <a href="#works" className={activeSection === 'works' ? 'active' : ''}>Showcase</a>
                </div>

                {/* Hamburger Button */}
                <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                <div className="nav-spacer side-spacer"></div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <a href="#services" onClick={toggleMobileMenu}>Services</a>
                <a href="#about" onClick={toggleMobileMenu}>About Us</a>
                <a href="#team" onClick={toggleMobileMenu}>Team</a>
                <a href="#works" onClick={toggleMobileMenu}>Showcase</a>
            </div>
        </nav>
    );
};

export default Navbar;
