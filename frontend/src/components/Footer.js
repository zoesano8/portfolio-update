import React from 'react'; // Import useState
import Resume from './Resume';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="contact-cards-container">

                {/* Resume links */}
                <div className="contact-card">
                    <h2>Professional Documents</h2>
                    <p>View my resume and college transcript here</p>
                    <span className="material-symbols-outlined">arrow_downward</span> <br />

                    <section id="resume">
                        <Resume />
                        <br />
                    </section>
                    <section id="certifications">
                        <p>List of Certifications</p>
                        <span className="material-symbols-outlined">arrow_downward</span> <br />
                        <ul className="certification-links">
                            <li><a href="https://www.credly.com/badges/f060837a-7b52-46e7-b42b-3debb49ff6c2/linked_in_profile" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></li>
                            <li><a href="https://www.credly.com/users/zoe-sano" target="_blank" rel="noopener noreferrer">Meta & Google Certifications</a></li>
                            <li><a href="https://www.keysight.com/us/en/lib/resources/miscellaneous/industryready-student-listing--colorado-school-of-mines-2713007.html" target="_blank" rel="noopener noreferrer">Keysight ADS - Industry Ready Student</a></li>

                        </ul>
                    </section>
                </div>
            </div>

            {/* Social Links */}
            <div className="socials">
                <h3>Find me on:</h3>
                <a href="https://www.linkedin.com/in/zoe-sano/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a href="https://github.com/zoesano8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a href="https://zoes-documentation-homebase.gitbook.io/zoes-documentation-homebase-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBook} className="social-icon" />
                </a>
                <a href="https://minesathletics.com/sports/womens-soccer/roster/zoe-sano/11322" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFutbol} className="social-icon" />
                </a>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <p>&copy; 2024 Zoe Sano. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
