import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import securityIcon from '../../assets/svgs/security.svg';
import infraIcon from '../../assets/svgs/infrastructure.svg';
import dbIcon from '../../assets/svgs/database.svg';
import chipIcon from '../../assets/svgs/chip.svg';
import apiIcon from '../../assets/svgs/api.svg';
import analyticsIcon from '../../assets/svgs/analytics.svg';
import './CloudVisual.css';

const CloudVisual = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "center center"]
    });

    // Core animation: pops up early
    const coreScale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
    const coreOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Orbit animations: sequential reveal
    const innerScale = useTransform(scrollYProgress, [0.2, 0.5], [0.7, 1]);
    const innerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    const middleScale = useTransform(scrollYProgress, [0.35, 0.7], [0.8, 1]);
    const middleOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

    const outerScale = useTransform(scrollYProgress, [0.5, 0.9], [0.9, 1]);
    const outerOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    return (
        <div className="cloud-visual-container" ref={containerRef}>
            <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" className="cloud-svg">
                {/* Orbit Outlines & Fills */}
                <motion.circle
                    cx="300" cy="300" r="260"
                    className="orbit-line-path path-outer"
                    fill="url(#orbit-gradient-outer)"
                    style={{ scale: outerScale, opacity: outerOpacity }}
                />
                <motion.circle
                    cx="300" cy="300" r="180"
                    className="orbit-line-path path-middle"
                    fill="url(#orbit-gradient-middle)"
                    style={{ scale: middleScale, opacity: middleOpacity }}
                />
                <motion.circle
                    cx="300" cy="300" r="100"
                    className="orbit-line-path path-inner"
                    fill="url(#orbit-gradient-inner)"
                    style={{ scale: innerScale, opacity: innerOpacity }}
                />

                {/* Central Cloud Core */}
                <motion.g className="cloud-core-group" style={{ scale: coreScale, opacity: coreOpacity }}>
                    <circle cx="300" cy="300" r="45" fill="url(#cloud-nucleus-gradient)" stroke="#D44801" strokeWidth="2.5" />
                    <path d="M308 298.5C309.3 298.6 310.4 299.1 311.3 300C312.2 300.9 312.6 302 312.6 303.3C312.6 304.6 312.1 305.7 311.1 306.6C310.1 307.5 308.9 308 307.5 308H294.5C292.8 308 291.4 307.4 290.2 306.3C289 305.2 288.4 303.8 288.4 302.2C288.4 300.7 288.9 299.4 289.9 298.3C290.9 297.2 292.2 296.6 293.7 296.5C294.3 295.3 295.2 294.3 296.4 293.6C297.6 292.9 298.9 292.6 300.3 292.6C302.1 292.6 303.7 293.2 305.1 294.3C306.5 295.4 307.4 296.8 307.7 298.5Z" fill="white" />
                </motion.g>

                {/* Orbit 3 (Outer) - 3 Bubbles */}
                <motion.g className="orbit-group" style={{ '--radius': 260, scale: outerScale, opacity: outerOpacity }}>
                    <g className="icon-orbit" style={{ '--init-angle': '0' }}>
                        <g className="icon-bubble">
                            <circle r="28" className="bubble-bg" />
                            <image href={securityIcon} x="-12" y="-12" width="24" height="24" />
                        </g>
                    </g>
                    <g className="icon-orbit" style={{ '--init-angle': '120' }}>
                        <g className="icon-bubble">
                            <circle r="28" className="bubble-bg" />
                            <image href={chipIcon} x="-12" y="-12" width="24" height="24" />
                        </g>
                    </g>
                    <g className="icon-orbit" style={{ '--init-angle': '240' }}>
                        <g className="icon-bubble">
                            <circle r="28" className="bubble-bg" />
                            <image href={dbIcon} x="-12" y="-12" width="24" height="24" />
                        </g>
                    </g>
                </motion.g>

                {/* Orbit 2 (Middle) - 3 Bubbles */}
                <motion.g className="orbit-group" style={{ '--radius': 180, scale: middleScale, opacity: middleOpacity }}>
                    <g className="icon-orbit" style={{ '--init-angle': '60' }}>
                        <g className="icon-bubble">
                            <circle r="28" className="bubble-bg" />
                            <image href={infraIcon} x="-12" y="-12" width="24" height="24" />
                        </g>
                    </g>
                    <g className="icon-orbit" style={{ '--init-angle': '180' }}>
                        <g className="icon-bubble">
                            <circle r="28" className="bubble-bg" />
                            <image href={apiIcon} x="-12" y="-12" width="24" height="24" />
                        </g>
                    </g>
                    <g className="icon-orbit" style={{ '--init-angle': '300' }}>
                        <g className="icon-bubble">
                            <circle r="28" className="bubble-bg" />
                            <image href={analyticsIcon} x="-12" y="-12" width="24" height="24" />
                        </g>
                    </g>
                </motion.g>

                {/* Orbit 1 (Inner) - Radius 100 (No Bubbles) */}
                <motion.g className="orbit-group" style={{ '--radius': 100, scale: innerScale, opacity: innerOpacity }}>
                </motion.g>

                <defs>
                    <linearGradient id="cloud-nucleus-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="20%" stopColor="#FF7B00" />
                        <stop offset="50%" stopColor="#FF6900" />
                        <stop offset="100%" stopColor="#A82700" />
                    </linearGradient>

                    <linearGradient id="orbit-gradient-outer" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255, 105, 0, 0.08)" />
                        <stop offset="100%" stopColor="rgba(255, 105, 0, 0)" />
                    </linearGradient>

                    <linearGradient id="orbit-gradient-middle" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255, 105, 0, 0.12)" />
                        <stop offset="100%" stopColor="rgba(255, 105, 0, 0)" />
                    </linearGradient>

                    <linearGradient id="orbit-gradient-inner" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255, 105, 0, 0.18)" />
                        <stop offset="100%" stopColor="rgba(255, 105, 0, 0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default CloudVisual;
