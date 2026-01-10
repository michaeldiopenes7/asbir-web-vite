import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CodeVisual.css';

const CodeVisual = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "center center"]
    });

    const rows = [
        { id: 1, text: 'src', type: 'folder', indent: 0, color: '#6b7280' },
        { id: 2, text: 'components', type: 'folder', indent: 1, color: '#6b7280' },
        { id: 3, text: 'Services', type: 'folder', indent: 2, color: '#9ca3af' },
        { id: 4, text: 'Web Development', type: 'folder', indent: 3, color: '#D1D5DC' },
        { id: 5, text: 'index.jsx', type: 'file', indent: 4, color: '#FFFFFF', highlight: true },
        { id: 6, text: 'CMS.jsx', type: 'file', indent: 4, color: '#9ca3af' },
        { id: 9, text: 'Frontend.jsx', type: 'file', indent: 4, color: '#9ca3af' },
        { id: 10, text: 'Optimisation.jsx', type: 'file', indent: 4, color: '#9ca3af' },
    ];

    const rowHeight = 30;
    const startY = 35; // Shifted up to center in 270px box

    return (
        <div className="code-visual-container" ref={containerRef}>
            <svg
                viewBox="0 0 320 290"
                preserveAspectRatio="xMidYMid meet"
                className="code-svg"
            >
                {/* Background Card - Outline Only */}
                {/* <rect width="340" height="320" rx="12" fill="#0A0A0A" /> */}

                {/* Centered Outline Box (310 height container - 270 box = 40 diff -> y=20 to center) */}
                <rect x="0.5" y="10" width="339" height="270" rx="12" stroke="white" strokeOpacity="0.1" fill="none" />

                {/* Vertical Indentation Lines - Shifted to match new content position */}
                <motion.line
                    x1="31" y1="50" x2="31" y2="255"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
                />
                <motion.line
                    x1="55" y1="80" x2="55" y2="255"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0.1, 0.6], [0, 1]) }}
                />
                <motion.line
                    x1="79" y1="110" x2="79" y2="255"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0.2, 0.7], [0, 1]) }}
                />
                <motion.line
                    x1="103" y1="140" x2="103" y2="255"
                    stroke="white" strokeOpacity="0.1"
                    strokeWidth="1"
                    style={{ pathLength: useTransform(scrollYProgress, [0.3, 0.8], [0, 1]) }}
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
                                    y={yPos - 15}
                                    width="110"
                                    height="28"
                                    rx="4"
                                    fill="url(#code-highlight-gradient)"
                                />
                            )}

                            {/* Icon */}
                            {row.type !== 'more' && (
                                <g transform={`translate(${xIndent}, ${yPos - 8})`}>
                                    {row.type === 'folder' ? (
                                        <path
                                            d="M4.00004 9.3334L5.00004 7.40006C5.10876 7.18416 5.27412 7.00187 5.47845 6.8727C5.68277 6.74352 5.91837 6.67233 6.16004 6.66673H13.3334M13.3334 6.66673C13.5371 6.66637 13.7381 6.71269 13.9211 6.80212C14.1041 6.89155 14.2642 7.02172 14.3891 7.18264C14.514 7.34356 14.6003 7.53095 14.6415 7.73043C14.6827 7.92991 14.6776 8.13618 14.6267 8.3334L13.6 12.3334C13.5258 12.6211 13.3575 12.8758 13.122 13.0569C12.8865 13.2381 12.5972 13.3354 12.3 13.3334H2.66671C2.31309 13.3334 1.97395 13.1929 1.7239 12.9429C1.47385 12.6928 1.33337 12.3537 1.33337 12.0001V3.3334C1.33337 2.97978 1.47385 2.64064 1.7239 2.39059C1.97395 2.14054 2.31309 2.00006 2.66671 2.00006H5.26671C5.4897 1.99788 5.70968 2.05166 5.90651 2.15648C6.10334 2.2613 6.27073 2.41381 6.39337 2.60006L6.93337 3.40006C7.05478 3.58442 7.22006 3.73574 7.41437 3.84047C7.60869 3.94519 7.82597 4.00003 8.04671 4.00006H12C12.3537 4.00006 12.6928 4.14054 12.9428 4.39059C13.1929 4.64064 13.3334 4.97978 13.3334 5.3334V6.66673Z"
                                            stroke={row.color}
                                            fill="none"
                                            strokeWidth="1.33333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    ) : (
                                        <>
                                            <path
                                                d="M9.99996 1.33337H3.99996C3.64634 1.33337 3.3072 1.47385 3.05715 1.7239C2.8071 1.97395 2.66663 2.31309 2.66663 2.66671V13.3334C2.66663 13.687 2.8071 14.0261 3.05715 14.2762C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2762C13.1928 14.0261 13.3333 13.687 13.3333 13.3334V4.66671L9.99996 1.33337Z"
                                                stroke={row.color}
                                                fill="none"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.33337 1.33337V4.00004C9.33337 4.35366 9.47385 4.6928 9.7239 4.94285C9.97395 5.1929 10.3131 5.33337 10.6667 5.33337H13.3334"
                                                stroke={row.color}
                                                fill="none"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </>
                                    )}
                                </g>
                            )}

                            {/* Text */}
                            <text
                                x={xIndent + 20}
                                y={yPos}
                                fill={row.color}
                                fontSize="10"
                                fontFamily="monospace"
                                fontWeight={row.highlight ? "400" : "400"}
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
