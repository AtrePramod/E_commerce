import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import './navbar.css'; // Import your CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [categories, setCategories] = useState([]); // State for storing categories
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        // Fetch categories directly from the API on component mount
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/products/categories'); // Replace with your API endpoint
                setCategories(response.data); // Assuming response.data is an array of categories
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            // Navigate to a search results page or handle search functionality here
            console.log("Search Term:", searchTerm);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">Pramod</div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="dropbtn" onClick={toggleDropdown}>Products Category</button>
                            <div className="dropdown-content">

                                <ul className="dropdown-menu">

                                    <li >
                                        <Link to={`/category/tech`}>
                                            Pizza
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to={`/category/tech`}>
                                            Tech
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="search-bar">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
