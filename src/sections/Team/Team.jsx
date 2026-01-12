import React, { useState } from 'react';
import './Team.css';
import { teamMembers, getTeamByCategory } from '../../data/teamMembers';

const Team = () => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Leadership', 'Project Management', 'Engineering', 'Creative'];

    // Get filtered team members based on active tab
    const displayedMembers = getTeamByCategory(activeTab);

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

                <div className="team-grid">
                    {displayedMembers.map((member) => (
                        <div className="team-card" key={member.id}>
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
            </div>
        </section>
    );
};

export default Team;
