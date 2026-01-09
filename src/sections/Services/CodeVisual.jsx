import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CodeVisual.css';

const CodeVisual = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "center center"]
    });

    // File structure data to mimic the image
    const rows = [
        { id: 1, text: 'src', type: 'folder', indent: 0, color: '#6b7280' },
        { id: 2, text: 'components', type: 'folder', indent: 1, color: '#6b7280' },
        { id: 3, text: 'Services', type: 'folder', indent: 2, color: '#9ca3af' },
        { id: 4, text: 'Web Development', type: 'folder', indent: 3, color: '#D1D5DC' },
        { id: 5, text: 'index.jsx', type: 'file', indent: 4, color: '#FFFFFF', highlight: true },
        { id: 6, text: 'CMS.jsx', type: 'file', indent: 4, color: '#9ca3af' },
        { id: 7, text: 'Turnkey.jsx', type: 'file', indent: 4, color: '#9ca3af' },
        { id: 8, text: 'Backend.jsx', type: 'file', indent: 4, color: '#9ca3af' },
        { id: 9, text: 'Frontend.jsx', type: 'file', indent: 4, color: '#9ca3af' },
        { id: 10, text: 'Optimisation.jsx', type: 'file', indent: 4, color: '#9ca3af' },
    ];

    const rowHeight = 32;
    const startY = 30;

    return (
        <div className="code-visual-container" ref={containerRef}>
            <svg
                viewBox="0 0 340 320"
                preserveAspectRatio="xMidYMid meet"
                className="code-svg"
            >
                {/* Background Card */}
                <rect width="340" height="320" rx="12" fill="#0A0A0A" />
                <rect x="0.5" y="0.5" width="339" height="319" rx="12" stroke="white" strokeOpacity="0.1" />

                {/* Vertical Indentation Lines */}
                <motion.line
                    x1="24" y1="40" x2="24" y2="280"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
                />
                <motion.line
                    x1="48" y1="70" x2="48" y2="250"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0.1, 0.6], [0, 1]) }}
                />
                <motion.line
                    x1="72" y1="100" x2="72" y2="220"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0.2, 0.7], [0, 1]) }}
                />

                {rows.map((row, index) => {
                    // Stagger animation for each row
                    const start = index * 0.05;
                    const end = start + 0.3;
                    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                    const x = useTransform(scrollYProgress, [start, end], [-20, 0]);

                    const yPos = startY + (index * rowHeight);
                    const xIndent = 24 + (row.indent * 24);

                    return (
                        <motion.g key={row.id} style={{ opacity, x }}>
                            {/* Highlight Background */}
                            {row.highlight && (
                                <rect
                                    x={xIndent - 8}
                                    y={yPos - 18}
                                    width="160"
                                    height="28"
                                    rx="4"
                                    fill="url(#code-highlight-gradient)"
                                />
                            )}

                            {/* Icon */}
                            {row.type === 'folder' ? (
                                <path
                                    d={`M${xIndent} ${yPos - 4} L${xIndent + 2} ${yPos - 6} H${xIndent + 8} L${xIndent + 10} ${yPos - 4} H${xIndent + 14} V${yPos + 6} H${xIndent} Z`}
                                    stroke={row.color}
                                    fill="none"
                                    strokeWidth="1.5"
                                />
                            ) : (
                                <path
                                    d={`M${xIndent + 2} ${yPos - 6} H${xIndent + 10} L${xIndent + 12} ${yPos - 4} V${yPos + 6} H${xIndent + 2} Z`}
                                    stroke={row.color}
                                    fill="none"
                                    strokeWidth="1.5"
                                />
                            )}

                            {/* Text */}
                            <text
                                x={xIndent + 20}
                                y={yPos}
                                fill={row.color}
                                fontSize="13"
                                fontFamily="monospace"
                                fontWeight={row.highlight ? "600" : "400"}
                                alignmentBaseline="middle"
                            >
                                {row.text}
                            </text>
                        </motion.g>
                    );
                })}

                <defs>
                    <linearGradient id="code-highlight-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF6900" />
                        <stop offset="100%" stopColor="rgba(255, 105, 0, 0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default CodeVisual;
