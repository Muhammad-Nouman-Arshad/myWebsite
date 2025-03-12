import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Company Name */}
        <div className="text-4xl font-extrabold text-white">
          <NavLink to="/" className="hover:text-yellow-400 transition-colors duration-300">
            NextBuy
          </NavLink>
        </div>

        {/* Right - Links */}
        <div>
          <ul className="flex space-x-8 text-lg font-medium">
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
