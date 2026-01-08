import React from 'react';

const ContactCTA = () => (
    <section className="contact-cta">
        <div className="container">
            <div className="cta-card">
                <div className="cta-glow"></div>
                <div className="cta-text">
                    <h2>Talk to us today</h2>
                    <p>Ready to start your next big project? Let's discuss how we can help you achieve your goals.</p>
                </div>
                <div className="cta-info">
                    <div className="info-item">
                        <span>Email</span>
                        <p>hello@asbirtech.com</p>
                    </div>
                    <div className="info-item">
                        <span>Phone</span>
                        <p>+1 234 567 890</p>
                    </div>
                    <div className="info-item">
                        <span>Location</span>
                        <p>San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactCTA;
