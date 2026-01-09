import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CostVisual.css';

const CostVisual = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.2"]
    });

    const bars = [
        { label: 'Software Dev', color: '#FF6900', textColor: '#FFFFFF', desktopWidth: '100%', mobileWidth: '100%' },
        { label: 'In-House Team', color: '#CE5602', textColor: '#E0E0E0', desktopWidth: '90%', mobileWidth: '85%' },
        { label: 'Recruitment', color: '#A74704', textColor: '#C0C0C0', desktopWidth: '75%', mobileWidth: '70%' },
        { label: 'Infrastructure', color: '#933F04', textColor: '#A0A0A0', desktopWidth: '60%', mobileWidth: '55%' },
        { label: 'Management', color: '#803805', textColor: '#888888', desktopWidth: '45%', mobileWidth: '40%' },
        { label: 'Turnkey', color: '#6C3006', textColor: '#777777', desktopWidth: '35%', mobileWidth: '35%' },
        { label: 'Outsourcing', color: '#1E1E1E', textColor: '#555555', desktopWidth: '30%', mobileWidth: '30%' },
        { label: 'Optimisation', color: '#151515', textColor: '#444444', desktopWidth: '25%', mobileWidth: '25%' },
    ];

    return (
        <div className="cost-visual-container" ref={containerRef}>
            <div className="stats-bars">
                {bars.map((bar, index) => {
                    const start = index * 0.04;
                    const end = 0.5 + (index * 0.03);
                    const x = useTransform(scrollYProgress, [start, end], ["-100%", "0%"]);
                    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

                    return (
                        <div key={index} className="stat-row">
                            <motion.div
                                className="stat-bar"
                                style={{
                                    backgroundColor: bar.color,
                                    '--desktop-w': bar.desktopWidth,
                                    '--mobile-w': bar.mobileWidth,
                                    x,
                                    opacity
                                }}
                            >
                                <motion.span
                                    className="stat-label"
                                    style={{
                                        color: bar.textColor,
                                        opacity
                                    }}
                                    title={bar.label} // Shows full text on hover
                                >
                                    {bar.label}
                                </motion.span>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CostVisual;
