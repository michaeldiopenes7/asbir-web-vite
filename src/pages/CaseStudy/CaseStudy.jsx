
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import placeholderPrj from '../../assets/images/placeholderprj.webp';
import SEO from '../../components/SEO/SEO';
import './CaseStudy.css';

const CaseStudy = () => {
    const { slug } = useParams();
    const caseStudy = caseStudies.find(study => study.slug === slug);
    const moreProjects = caseStudies.filter(study => study.slug !== slug).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!caseStudy) {
        return (
            <div className="case-study-not-found">
                <h2>Project Not Found</h2>
                <Link to="/" className="back-link">Return to Home</Link>
            </div>
        );
    }

    return (
        <article className="case-study-page">
            <SEO
                title={caseStudy.title}
                description={caseStudy.description}
                canonical={`/projects/${caseStudy.slug}`}
                openGraphType="article"
                image={caseStudy.image || placeholderPrj}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": caseStudy.title,
                    "description": caseStudy.description,
                    "image": caseStudy.image || placeholderPrj,
                    "author": {
                        "@type": "Organization",
                        "name": "AsbirTech"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "AsbirTech",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://asbirtech.com/logo.png"
                        }
                    },
                    "datePublished": "2024-01-01" // You might want to add a date field to your data
                }}
            />
            <div className="cs-container">
                <header className="cs-header">
                    <div className="cs-categories">
                        {caseStudy.categories && caseStudy.categories.map((cat, index) => (
                            <span key={index} className="cs-category-pill">{cat}</span>
                        ))}
                    </div>
                    <h1 className="cs-title">{caseStudy.title}</h1>
                    <p className="cs-description">{caseStudy.description}</p>
                    <div className="cs-meta">
                        <span>{caseStudy.client}</span>
                        <span className="cs-meta-divider">•</span>
                        <span>{caseStudy.year}</span>
                        <span className="cs-meta-divider">•</span>
                        <span>{caseStudy.duration}</span>
                    </div>
                </header>

                <div className="cs-hero-image-wrapper">
                    <img
                        src={caseStudy.image || placeholderPrj}
                        alt={caseStudy.title}
                        className="cs-hero-image"
                    />
                </div>

                <div className="cs-content">
                    <section className="cs-section">
                        <h2 className="cs-section-label">THE CHALLENGE</h2>
                        <p className="cs-text">{caseStudy.challenge}</p>
                    </section>



                    <section className="cs-section">
                        <h2 className="cs-section-label">THE SOLUTION</h2>
                        <p className="cs-text">{caseStudy.solution}</p>
                    </section>



                    <section className="cs-tech-stack">
                        {caseStudy.technologies && caseStudy.technologies.join(' · ')}
                    </section>
                </div>

                {caseStudy.testimonial && (
                    <blockquote className="cs-testimonial">
                        <p>"{caseStudy.testimonial.quote}"</p>
                        <footer>{caseStudy.testimonial.author}</footer>
                    </blockquote>
                )}

                <div className="cs-more-projects">
                    <h3 className="cs-more-label">MORE PROJECTS</h3>
                    <div className="cs-more-grid">
                        {moreProjects.map((project) => (
                            <Link to={`/projects/${project.slug}`} key={project.id} className="cs-more-card">
                                <div className="cs-more-image-wrapper">
                                    <img src={project.image || placeholderPrj} alt={project.title} loading="lazy" />
                                </div>
                                <div className="cs-more-info">
                                    <h4>{project.title}</h4>
                                    <p>{project.tags}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CaseStudy;
