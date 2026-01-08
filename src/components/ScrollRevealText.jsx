import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Word = ({ children, progress, range }) => {
    // Opacity goes from 0.15 to 1 as the scroll progress passes through the word's range
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <motion.span style={{ opacity }} className="reveal-word">
            {children}{' '}
        </motion.span>
    );
};

const ScrollRevealText = ({ content, className, progress }) => {
    const containerRef = useRef(null);
    const { scrollYProgress: internalScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "end 0.3"]
    });

    const scrollProgress = progress || internalScrollProgress;
    const words = content.split(" ");

    return (
        <span ref={containerRef} className={className} style={{ display: 'inline' }}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                return (
                    <Word key={i} progress={scrollProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </span>
    );
};

export default ScrollRevealText;
