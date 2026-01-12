import React, { useState, useEffect } from 'react';
import './Team.css';
import { teamMembers, getTeamByCategory } from '../../data/teamMembers';
import cardBg from '../../assets/images/cardbgteam.png';

const Team = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [startIndex, setStartIndex] = useState(0);
    const tabs = ['All', 'Executives', 'Project Management', 'Engineering', 'Marketing', 'Product Design', 'Quality Assurance', 'Research', 'Gender Fluid'];
    const itemsPerPage = 5;

    // Get filtered team members based on active tab
    const displayedMembers = getTeamByCategory(activeTab);

    // Reset carousel when tab changes
    useEffect(() => {
        setStartIndex(0);
    }, [activeTab]);

    const nextSlide = () => {
        if (startIndex + itemsPerPage < displayedMembers.length) {
            setStartIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };

    const visibleMembers = displayedMembers.slice(startIndex, startIndex + itemsPerPage);
    console.log('Visible Members:', visibleMembers);
    const showControls = displayedMembers.length > itemsPerPage;

    return (
        <section className="team" id="team">
            <div className="container">
                <div className="section-header align-center">
                    <div className="badge">Our Team</div>
                    <h2>Meet the Team</h2>
                    <p>Our experts are dedicated to your success</p>
                </div>

                <div className="team-filters">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="team-carousel-container">
                    {showControls && (
                        <button
                            className="carousel-btn prev-btn"
                            onClick={prevSlide}
                            disabled={startIndex === 0}
                            aria-label="Previous team members"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                    )}

                    <div className="team-grid">
                        {visibleMembers.map((member) => (
                            <div className="team-card" key={member.id}>
                                <img src={cardBg} alt="" className="card-bg-image" />
                                <div className="card-bg-gradient"></div>

                                <div className="member-image-container">
                                    {member.image && <img src={member.image} alt={member.name} className="member-img" />}
                                </div>

                                <div className="member-info">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {showControls && (
                        <button
                            className="carousel-btn next-btn"
                            onClick={nextSlide}
                            disabled={startIndex + itemsPerPage >= displayedMembers.length}
                            aria-label="Next team members"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Team;
