import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import react-slick for the slider
import { Link } from 'react-router-dom';
import './home.css'; // Import your CSS file for styling
import Img from '../image.png'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dummy product data
    const dummyProducts = [
        {
            _id: '1',
            name: 'Sample Pizza 1',
            description: 'Delicious cheese pizza with extra toppings',
            price: 12.99,
            stock: 50,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '2',
            name: 'Sample Pizza 2',
            description: 'Classic pepperoni pizza',
            price: 14.99,
            stock: 30,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '3',
            name: 'Sample Pizza 3',
            description: 'Veggie pizza with fresh ingredients',
            price: 11.99,
            stock: 20,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '4',
            name: 'Sample Pizza 4',
            description: 'BBQ chicken pizza with smoky flavor',
            price: 15.99,
            stock: 25,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '5',
            name: 'Sample Pizza 5',
            description: 'Hawaiian pizza with pineapple and ham',
            price: 13.99,
            stock: 15,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '6',
            name: 'Sample Pizza 6',
            description: 'Four cheese pizza with a blend of flavors',
            price: 16.99,
            stock: 10,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '7',
            name: 'Sample Pizza 7',
            description: 'Meat lover\'s pizza loaded with meats',
            price: 18.99,
            stock: 5,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '8',
            name: 'Sample Pizza 8',
            description: 'Margarita pizza with fresh basil',
            price: 10.99,
            stock: 40,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '9',
            name: 'Sample Pizza 9',
            description: 'Spicy pizza with jalapenos and pepperoni',
            price: 14.99,
            stock: 20,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: '10',
            name: 'Sample Pizza 10',
            description: 'Stuffed crust pizza with a cheesy center',
            price: 19.99,
            stock: 12,
            category: 'Pizzas',
            image: 'https://via.placeholder.com/300',
        },
    ];

    // Fetch products from API (now replaced with dummy data)
    useEffect(() => {
        setProducts(dummyProducts);
        setLoading(false);
    }, []);

    // Slider settings for featured products
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="home-page">

            <div className="products-section">
                <h2>Our Products</h2>
                <div className="product-cards-container">
                    {loading ? (
                        <p>Loading products...</p>
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-card">
                                <img
                                    src={Img}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <p>{product.description}</p>
                                <Link to={`/product/${product._id}`} className="read-more">
                                    Read More
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
