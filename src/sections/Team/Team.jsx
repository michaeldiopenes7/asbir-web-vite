import React, { useState, useEffect } from 'react';
import './Team.css';
import { teamMembers, getTeamByCategory } from '../../data/teamMembers';
import cardBg from '../../assets/images/cardbgteam.png';

const Team = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const tabs = ['All', 'Executives', 'Project Management', 'Engineering', 'Marketing', 'Product Design', 'Quality Assurance', 'Research & Admin Works'];
    const gridRef = React.useRef(null);

    const displayedMembers = getTeamByCategory(activeTab);

    const checkScroll = () => {
        if (gridRef.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = gridRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 2);
        }
    };

    useEffect(() => {
        const grid = gridRef.current;
        if (grid) {
            // Initial check after render
            const timer = setTimeout(checkScroll, 100);

            grid.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);

            return () => {
                clearTimeout(timer);
                grid.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, [displayedMembers, activeTab]);

    const scroll = (direction) => {
        if (gridRef.current) {
            const scrollAmount = gridRef.current.offsetWidth;
            gridRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="team" id="team">
            <div className="container">
                <div className="section-header align-center">
                    <div className="badge">Our Team</div>
                    <h2>Meet the Team</h2>
                    <p>Our experts are dedicated to your success</p>
                </div>

                <div className="team-filters">
                    {tabs.map(tab => {
                        const memberCount = getTeamByCategory(tab).length;
                        return (
                            <button
                                key={tab}
                                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                                disabled={tab !== 'All' && memberCount === 0}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                <div className="team-carousel-container">
                    <button
                        className="carousel-btn prev-btn"
                        onClick={() => scroll('left')}
                        aria-label="Previous team members"
                        disabled={!canScrollLeft}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="team-grid" ref={gridRef}>
                        {displayedMembers.map((member) => (
                            <div className="team-card" key={member.id}>
                                <img src={cardBg} alt="" className="card-bg-image" width="300" height="400" aria-hidden="true" />
                                <div className="card-bg-gradient"></div>

                                <div className="member-image-container">
                                    {member.image && <img src={member.image} alt={member.name} className="member-img" draggable="false" width="200" height="200" loading="lazy" />}
                                </div>

                                <div className="member-info">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-btn next-btn"
                        onClick={() => scroll('right')}
                        aria-label="Next team members"
                        disabled={!canScrollRight}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
