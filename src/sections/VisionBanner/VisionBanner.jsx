import React from 'react';
import './VisionBanner.css';
import aboutUsBg from '../../assets/svgs/aboutus.svg';

const VisionBanner = () => (
    <section className="vision-banner" id="about" style={{ backgroundImage: `url(${aboutUsBg})` }}>
        <div className="vision-glow"></div>
        <div className="container vision-content">
            <div className="vision-left">
                <div className="badge">About Us</div>
                <h2>
                    Delivering technology services that fit the way your business works
                </h2>
            </div>
            <div className="vision-right">
                <p>
                    Asbir Tech is a web development and IT consulting company established in 2016 in the Philippines. In 2022, it was brought to Australia when one of its partners emigrated. Since its inception in 2016 the company has been serving IT and non-IT organizations, helping to achieve a variety of goals and objectives with digital solutions and recent trend technologies.
                </p>
                <h3>The Dream Team</h3>
                <p>
                    Comprised of developers, engineers, designers, UI/UX specialists, cyber security analysts, projects managers, QA and tech support specialists - the ever growing company prides itself in having talented and highly-skilled individuals, battle-tested and ready to deliver the highest quality of service.
                </p>
            </div>
        </div>
    </section>
);

export default VisionBanner;

