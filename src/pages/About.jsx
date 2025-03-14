import React from 'react';

import about from '../assets/about.jpg';
import me01 from '../assets/me01.jpg';
import me02 from '../assets/me02.jpg';
import me03 from '../assets/me03.jpg';

function About() {
  return (
    <div>
      {/* About Us Header */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Welcome to My E-commerce Website! We are dedicated to providing the best quality products with excellent customer service.
          </p>
          <img
            src={about}
            alt="Company Banner"
            className="w-full h-48 sm:h-64 object-cover"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Our mission is to offer a unique shopping experience by delivering top-notch products and services that meet the needs of our valued customers.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            We are a group of passionate individuals who are committed to delivering the best shopping experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {/* Team Member Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={me01}
                alt="Team Member 1"
                className="w-full h-90 sm:h-90 lg:h-90 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Muhammad Usman Arshad</h3>
                <p className="text-gray-600 mb-4">CEO & Founder</p>
                <p className="text-gray-500">John is the visionary behind our company, ensuring we provide exceptional service to our customers.</p>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={me02}
                alt="Team Member 2"
                className="w-full h-90 sm:h-90 lg:h-90 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Muhammad Nouman Arshad</h3>
                <p className="text-gray-600 mb-4">Chief Marketing Officer</p>
                <p className="text-gray-500">Jane is in charge of all our marketing efforts, helping us grow and reach more customers worldwide.</p>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={me03}
                alt="Team Member 3"
                className="w-full h-90 sm:h-90 lg:h-90 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Muhammad Zeeshan Arshad</h3>
                <p className="text-gray-600 mb-4">Head of Customer Support</p>
                <p className="text-gray-500">Mike leads our customer support team, ensuring every customer receives the help they need quickly and effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            We value feedback from our customers. Here's what some of them have to say about their experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {/* Customer Review */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <p className="text-gray-800 font-semibold mb-2">"Amazing service and fast delivery!"</p>
              <p className="text-gray-600 mb-4">- Irfan Ahmad</p>
            </div>

            {/* Customer Review */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <p className="text-gray-800 font-semibold mb-2">"Highly recommend this website. Fantastic products!"</p>
              <p className="text-gray-600 mb-4">- Abdul Hameed</p>
            </div>

            {/* Customer Review */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <p className="text-gray-800 font-semibold mb-2">"Great customer support and easy returns!"</p>
              <p className="text-gray-600 mb-4">- Hafiz Ahmad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
