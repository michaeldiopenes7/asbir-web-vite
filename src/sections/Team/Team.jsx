import React, { useState } from 'react';
import './Team.css';

const Team = () => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Leadership', 'Project Management', 'Engineering', 'Creative'];
    const members = [
        { name: 'John Doe', role: 'CEO & Founder', category: 'Leadership' },
        { name: 'Jane Smith', role: 'CTO', category: 'Leadership' },
        { name: 'Mike Johnson', role: 'Lead Developer', category: 'Engineering' },
        { name: 'Sarah Wilson', role: 'Project Manager', category: 'Project Management' },
        { name: 'Alex Brown', role: 'UX Designer', category: 'Creative' },
        { name: 'Chris Lee', role: 'Backend Engineer', category: 'Engineering' },
    ];

    const filteredMembers = activeTab === 'All' ? members : members.filter(m => m.category === activeTab);

    return (
        <section className="team" id="team">
            <div className="container">
                <div className="section-header align-center">
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
                    {filteredMembers.map((member, i) => (
                        <div className="team-card" key={i}>
                            <div className="member-photo"></div>
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
