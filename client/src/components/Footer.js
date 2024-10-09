import React from 'react';
import './footer.css'; // Import your CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="path_to_your_logo.png" alt="Company Logo" className="logo" />
                    <h1>Your Company Name</h1>
                </div>
                <div className="footer-info">
                    <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                    <p><strong>Contact Number:</strong> +1 (234) 567-890</p>
                    <p><strong>Email:</strong> info@yourcompany.com</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us:</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
