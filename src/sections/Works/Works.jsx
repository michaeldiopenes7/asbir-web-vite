import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import placeholderPrj from '../../assets/images/placeholderprj.webp';
import './Works.css';

const Works = () => (
    <section className="works" id="works">
        <div className="container">
            <div className="section-header">
                <div className="badge">Portfolio</div>
                <h2>Our Works</h2>
                <p>Combining innovation and excellence in every project.</p>
            </div>
            <div className="works-list">
                {caseStudies.map((work) => (
                    <Link to={`/projects/${work.slug}`} className="work-item" key={work.id}>
                        <img
                            src={work.image || placeholderPrj}
                            alt={work.title}
                            className="work-bg-image"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                        <div className="work-overlay"></div>
                        <div className="work-content">
                            <h3>{work.title}</h3>
                            <p className="work-tags">{work.tags}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

export default Works;
