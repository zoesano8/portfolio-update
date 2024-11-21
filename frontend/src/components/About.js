import React, { useState, useEffect } from 'react';
import './About.css';
import FallingStars from './FallingStars';

const About = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "Hello, I'm Zoe.";
    const typingSpeed = 150;

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;

            if (index === fullText.length) {
                clearInterval(typingInterval); // Stop when full text is typed
            }
        }, typingSpeed);

        // Hide cursor after 5 seconds
        const cursorTimeout = setTimeout(() => {
            setShowCursor(false);
        }, 5000);

        return () => {
            clearInterval(typingInterval);
            clearTimeout(cursorTimeout);
        };
    }, []);

    return (
        <div className="about-section-container">
            <FallingStars />
            <section className="about-section">
                <h2 className={`typewriter ${showCursor ? 'blinking' : ''}`}>{text}</h2>
                <div>
                    <img src="/headshot.jpg" alt="Zoe Sano" className="headshot" />
                    <p>
                        <i>I'm an engineer with a passion for creativity and innovation that extends far beyond the boundaries of paper.</i>
                        <br />
                        <br />
                        With a degree in Electrical Engineering and a passion for learning, I've ventured into a variety of fields, embracing new challenges and expanding my skill set.
                        This portfolio showcases my journey of growth, featuring projects from both my university studies and personal endeavors. Each project highlights my technical expertise, problem-solving abilities, and adaptability across multiple domains.
                        <br />
                        <br />
                        Explore my portfolio to see how I leverage engineering principles to create impactful solutions. Feel free to reach out with any questions or opportunities — my contact details are available on my resume!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
