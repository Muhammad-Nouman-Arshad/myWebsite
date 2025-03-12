import React from 'react';
import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer grid with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Company Information Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Office</h2>
            <p className="text-gray-300 mb-2">
              Garden Town, Barket Market<br />
              Lahore, Pubjab, 05450
            </p>
            <p className="text-gray-300 mb-2">
              Phone: +92 328-7976419
            </p>
            <p className="text-gray-300 mb-2">
              Email: muhammadnoumanarshad013@gmail.com
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <p className="text-gray-300 mb-6">
              Stay connected with us on social media for the latest updates, promotions, and news.
            </p>
            <div className="flex space-x-6">
            <a href="https://www.youtube.com/@nomiii013" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550866733973" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/muhammad_nouman_arshad_013/" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-nouman-arshad-b51373337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="text-center text-gray-400 mt-12">
          &copy; 2025 E-Commerce Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
