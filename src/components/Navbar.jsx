import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // For icons (install lucide-react if not installed)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Company Name */}
        <div className="text-4xl font-extrabold text-white">
          <NavLink to="/" className="hover:text-yellow-400 transition-colors duration-300">
            NextBuy
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Right - Links */}
        <div className={`md:flex space-x-8 text-lg font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {/* Home */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold underline decoration-4 underline-offset-4'
                    : 'text-white hover:text-yellow-400 transition-colors duration-300'
                }
              >
                Home
              </NavLink>
            </li>

            {/* Products */}
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold underline decoration-4 underline-offset-4'
                    : 'text-white hover:text-yellow-400 transition-colors duration-300'
                }
              >
                Products
              </NavLink>
            </li>

            {/* Services */}
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold underline decoration-4 underline-offset-4'
                    : 'text-white hover:text-yellow-400 transition-colors duration-300'
                }
              >
                Services
              </NavLink>
            </li>

            {/* Contact */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold underline decoration-4 underline-offset-4'
                    : 'text-white hover:text-yellow-400 transition-colors duration-300'
                }
              >
                Contact
              </NavLink>
            </li>

            {/* About */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold underline decoration-4 underline-offset-4'
                    : 'text-white hover:text-yellow-400 transition-colors duration-300'
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
