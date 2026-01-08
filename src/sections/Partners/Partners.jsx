import React from 'react';
import partner1 from '../../assets/images/placeholderprtnr.png';
import partner2 from '../../assets/images/placeholderprtnr1.png';
import partner3 from '../../assets/images/placeholderprtnr2.png';
import partner4 from '../../assets/images/placeholderprtnr3.png';
import partner5 from '../../assets/images/placeholderprtnr4.png';
import './Partners.css';

const Partners = () => (
    <section className="partners">
        <div className="container">
            <div className="partners-grid">
                <div className="partner-logo">
                    <img src={partner1} alt="Partner 1" width="160" height="80" loading="lazy" />
                </div>
                <div className="partner-logo">
                    <img src={partner2} alt="Partner 2" width="160" height="80" loading="lazy" />
                </div>
                <div className="partner-logo">
                    <img src={partner3} alt="Partner 3" width="160" height="80" loading="lazy" />
                </div>
                <div className="partner-logo">
                    <img src={partner4} alt="Partner 4" width="160" height="80" loading="lazy" />
                </div>
                <div className="partner-logo">
                    <img src={partner5} alt="Partner 5" width="160" height="80" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
);

export default Partners;
