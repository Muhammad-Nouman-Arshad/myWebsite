import React from 'react';

import fast_delievery from '../assets/fast_delievery.jpg';
import all_time from '../assets/all_time.png';
import easy_return from '../assets/easy_returns.jpeg';
import secure_payment from '../assets/secure_payment.jpg';
import membership_discount from '../assets/membership_discount.jpg';
import gift_card from '../assets/gift_cards.jpg';

function Services() {
  return (
    <div>
      {/* Services Header */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            We offer a variety of services to enhance your shopping experience and provide maximum value.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={fast_delievery}
                alt="Fast Delivery"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 mb-4">
                  We provide super-fast and reliable delivery service to ensure your products reach you on time.
                </p>
                <button className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={all_time}
                alt="24/7 Customer Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">24/7 Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  Our customer service team is available 24/7 to assist you with any queries or issues.
                </p>
                <button className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={easy_return}
                alt="Easy Returns"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600 mb-4">
                  We offer hassle-free returns on all products. Enjoy peace of mind with our easy return policies.
                </p>
                <button className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700">
                  Return Policy
                </button>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={secure_payment}
                alt="Secure Payment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600 mb-4">
                  We ensure that all transactions are secure and encrypted, providing you with a safe shopping experience.
                </p>
                <button className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={membership_discount}
                alt="Membership Discounts"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Membership Discounts</h3>
                <p className="text-gray-600 mb-4">
                  Join our membership program and get access to exclusive discounts and special offers.
                </p>
                <button className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700">
                  Join Now
                </button>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={gift_card}
                alt="Gift Cards"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Gift Cards</h3>
                <p className="text-gray-600 mb-4">
                  Give the gift of choice with our customizable gift cards, perfect for every occasion.
                </p>
                <button className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
