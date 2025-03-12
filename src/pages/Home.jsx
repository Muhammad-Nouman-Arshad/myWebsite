import React from 'react';

import { useNavigate } from 'react-router-dom';

import fe01 from '../assets/fe01.jpg'
import fe02 from '../assets/fe02.jpg'
import fe03 from '../assets/fe03.jpg'
import fe04 from '../assets/fe04.jpg'


function Home() {
    const navigate = useNavigate();
  
    const handleShopNowClick = () => {
      navigate('/products'); // Navigates to the Products page
    };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover amazing products and enjoy a seamless shopping experience!
          </p>

          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 cursor-pointer"
            onClick={handleShopNowClick}>
              Shop Now
          </button>

        </div>


      </section>

      {/* Promotional Banner */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Special Offer: 50% off on Selected Products!
          </h2>
          <p className="text-lg text-white mb-8">
            Hurry up and grab your favorite items at half the price!
          </p>

          <button
            className="bg-white text-blue-600 py-2 px-6 rounded-lg hover:bg-gray-300 cursor-pointer"
            onClick={handleShopNowClick}>
              View Offers
          </button>

        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={fe01}
                alt="Product 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product 1</h3>
                <p className="text-gray-600 mb-4">$49.99</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={fe02}
                alt="Product 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product 2</h3>
                <p className="text-gray-600 mb-4">$59.99</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={fe03}
                alt="Product 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product 3</h3>
                <p className="text-gray-600 mb-4">$69.99</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={fe04}
                alt="Product 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product 4</h3>
                <p className="text-gray-600 mb-4">$79.99</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "Amazing shopping experience, fast delivery and quality products!"
              </p>
              <div className="text-right">
                <h4 className="text-lg font-semibold text-center">John Doe</h4>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "The prices are great and the variety of products is excellent."
              </p>
              <div className="text-right">
                <h4 className="text-lg font-semibold text-center">Jane Smith</h4>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "I love shopping here! The offers are amazing and customer service is great."
              </p>
              <div className="text-right">
                <h4 className="text-lg font-semibold text-center">Alex Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
