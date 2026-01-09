import React from 'react';
import './OrbitingCircles.css';

const OrbitingCircles = ({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}) => {
    return (
        <>
            {path && (
                <div
                    className="orbiting-path-circle"
                    style={{
                        '--radius': radius,
                    }}
                />
            )}

            <div
                style={{
                    '--duration': duration,
                    '--radius': radius,
                    '--delay': -delay,
                }}
                className={`orbiting-container ${reverse ? 'reverse' : ''} ${className || ''}`}
            >
                {React.Children.map(children, (child, index) => {
                    const angle = (360 / React.Children.count(children)) * index;
                    return (
                        <div
                            style={{
                                '--angle': `${angle}deg`,
                            }}
                            className="orbiting-item"
                        >
                            {child}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OrbitingCircles;
