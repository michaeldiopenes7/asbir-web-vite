import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FileTree from '../../assets/images/filetree.svg';
import CloudIcon from '../../assets/images/cloud.svg';
import CostOptIcon from '../../assets/images/costopt.svg';
import DigiTransIcon from '../../assets/images/digitrans.svg';
import ScrollRevealText from '../../components/ScrollRevealText/ScrollRevealText';
import './Services.css';

const Services = () => {
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start 0.8", "end 0.2"]
    });

    // Derived progress for the text reveal and grid entrance
    const textProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const gridOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
    const gridY = useTransform(scrollYProgress, [0.4, 0.8], [40, 0]);

    return (
        <section className="services" id="services">
            <div className="container">
                <div ref={headerRef} className="section-header">
                    <div className="badge">What We Do</div>
                    <h2>
                        <span style={{ color: 'white', opacity: 1 }}>Our services </span>
                        <ScrollRevealText
                            content="enable businesses to scale, transform, and gain a competitive advantage with our robust and flexible web and mobile solutions."
                            progress={textProgress}
                        />
                    </h2>
                </div>

                <motion.div
                    className="services-grid"
                    style={{
                        opacity: gridOpacity,
                        y: gridY
                    }}
                >
                    {/* Web Development */}
                    <div className="service-card large web-dev-card">
                        <div className="service-visual code-viz">
                            <img src={FileTree} alt="Filesystem Structure" className="img-contain" style={{ padding: '1rem' }} />
                        </div>
                        <div className="service-info">
                            <h3>Web Development</h3>
                            <p>We design, develop, and execute web-based solutions ranging from robust social applications to complex backend administration and eCommerce systems.</p>
                            <div className="tags">
                                <span>CMS</span>
                                <span>Turnkey Web App</span>
                                <span>Back-End</span>
                                <span>Front-End</span>
                                <span>Web Optimisation</span>
                            </div>
                        </div>
                    </div>

                    {/* Web & Cloud Consulting */}
                    <div className="service-card large cloud-card">
                        <div className="service-visual cloud-viz" style={{ padding: 0, height: '100%' }}>
                            <img
                                src={CloudIcon}
                                alt="Cloud Architecture"
                                className="img-cover"
                                style={{ objectPosition: 'center right' }}
                            />
                        </div>
                        <div className="service-info">
                            <h3>Web & Cloud Consulting</h3>
                            <p>We provide advise in utilising cloud infrastructure efficiently, whether it is fully cloud-native or hybrid, and guide you through the consequences on culture, people, and technology.</p>
                            <div className="tags">
                                <span>Cloud Infrastructure</span>
                                <span>Cyber Security</span>
                                <span>Web testing</span>
                            </div>
                        </div>
                    </div>

                    {/* Cost Reduction & Optimisation */}
                    <div className="service-card large cost-card">
                        <div className="service-visual cost-viz" style={{ padding: 0 }}>
                            <img
                                src={CostOptIcon}
                                alt="Cost Optimization"
                                className="img-cover"
                                style={{ objectPosition: 'center left' }}
                            />
                        </div>
                        <div className="service-info">
                            <h3>Cost Reduction & Optimisation</h3>
                            <p>Our outsourcing services helps clients around the world to optimise software development costs. The team has all the needed expertise to carry out turnkey projects and bring all the benefits of outsourcing.</p>
                            <div className="tags">
                                <span>Turnkey Delivery</span>
                                <span>Resource Augmentation</span>
                                <span>Quality Assurance</span>
                            </div>
                        </div>
                    </div>

                    {/* Digital Transformation */}
                    <div className="service-card large digi-card">
                        <div className="service-visual digi-viz" style={{ padding: 0, height: '100%' }}>
                            <img
                                src={DigiTransIcon}
                                alt="Digital Transformation"
                                className="img-cover"
                                style={{ objectPosition: 'center right' }}
                            />
                        </div>
                        <div className="service-info">
                            <h3>Digital Transformation</h3>
                            <p>From planning to implementation, we assist clients to fully leverage the opportunities of a mix of digital technologies towards digital success and enterprise optimisation.</p>
                            <div className="tags">
                                <span>Digital Strategy</span>
                                <span>Technology Roadmap</span>
                                <span>UX / UI Design</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
