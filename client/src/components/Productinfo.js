import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './banner.css'; // Import your CSS file for styling

const Productinfo = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    // Fetch products from API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products/all'); // Adjust the API endpoint as necessary
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="banner">
            {products && }

        </div>
    );
};

export default Productinfo;
