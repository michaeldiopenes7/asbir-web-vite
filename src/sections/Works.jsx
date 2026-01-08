import React from 'react';
import placeholderPrj from '../assets/images/placeholderprj.webp';

const Works = () => (
    <section className="works" id="works">
        <div className="container">
            <div className="section-header">
                <div className="badge">Portfolio</div>
                <h2>Our Works</h2>
                <p>Combining innovation and excellence in every project.</p>
            </div>
            <div className="works-list">
                {[
                    { id: '01', title: 'Real Estate Platform', tags: 'Web Development • UI/UX Design' },
                    { id: '02', title: 'Fintech Dashboard', tags: 'Web Development • Branding' },
                    { id: '03', title: 'Healthcare App', tags: 'Mobile App • User Interface' },
                    { id: '04', title: 'E-commerce Engine', tags: 'Web Design • Marketing' },
                    { id: '05', title: 'Travel Booking', tags: 'UI/UX Design • Development' },
                    { id: '06', title: 'Social Network', tags: 'Mobile App • Social Media' },
                ].map((work) => (
                    <div className="work-item" key={work.id}>
                        <div className="work-preview">
                            <img src={placeholderPrj} alt={work.title} loading="lazy" />
                        </div>
                        <div className="work-details">
                            <h3>{work.title}</h3>
                            <p className="work-tags">{work.tags}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Works;
