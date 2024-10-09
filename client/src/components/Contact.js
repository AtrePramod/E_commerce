import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'; // Import your CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('/api/contact', formData); // Replace with your API endpoint
            console.log(response.data); // You can handle the response as needed
            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                contact: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            console.error('Error sending message:', err);
            setError('There was an error sending your message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Banner Section */}
            <div className="banner">
                <h1>Contact Us</h1>
                <p>We would love to hear from you!</p>
            </div>

            {/* Enquiry Form Section */}
            <div className="enquiry-form">
                <h2>Enquiry Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="contact"
                        placeholder="Your Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {success && <p className="success-message">Message sent successfully!</p>}
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>

            {/* Google Map Section */}
            <div className="google-map">
                <h2>Find Us Here</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509177!2d144.95373531568316!3d-37.81627997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f4c15%3A0xf11b3b3b7a1ebf44!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1633764402495!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
