import React from 'react';
import './VisionBanner.css';

const VisionBanner = () => (
    <section className="vision-banner" id="about">
        <div className="vision-glow"></div>
        <div className="container vision-content">
            <div className="vision-left">
                <div className="badge">Vision</div>
                <h3>
                    Delivering technology services that fit the way your business works
                </h3>
            </div>
            <div className="vision-right">
                <p>
                    Our mission is to empower businesses by providing innovative technology solutions that streamline operations and drive growth. We believe in the power of technology to transform the way we work and live.
                </p>
                <p>
                    We work closely with our clients to understand their unique challenges and deliver customized solutions that meet their specific needs.
                </p>
            </div>
        </div>
    </section>
);

export default VisionBanner;

