import { useState, useRef } from "react";
import { socialLinks } from "../../dummyData";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [artsOpen, setArtsOpen] = useState(false);

  const timeoutRef = useRef(null);

  const showDropdown = (menuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setArtsOpen(menuId);
  };

  const hideDropdown = (menuId) => {
    timeoutRef.current = setTimeout(() => {
      setArtsOpen((current) => (current === menuId ? null : current));
    }, 300);
  };

  return (
    <div className="md:sticky top-0 z-50 py-6 pb-2 px-4 lg:px-0" id="navbar">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-2">
        {/* Logo & Social Links */}
        <div className="flex flex-col items-start space-y-4">
          <h1
            className="text-3xl md:text-5xl font-bold text-gray-800 font-serif"
            style={{ fontFamily: "Playfair Display, cursive" }}
          >
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Rory Chen
            </NavLink>
          </h1>
          <div className="flex space-x-4 ml-1">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                className={`text-gray-600 ${link.colorClass}`}
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden px-2 text-4xl text-gray-700 mt-1 z-50 relative"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`z-40 fixed inset-0 bg-white flex-col items-center text-center p-6 gap-4 text-xl font-semibold md:static md:flex md:flex-row md:gap-8 md:text-lg md:bg-transparent md:p-0 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto py-12 space-y-8 md:py-0 md:space-y-0 md:space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? "active" : ""}`}
              >
                Portfolio
              </NavLink>
            </li>

            {/* Arts item in mobile end */}
            <li className="relative group md:hidden">
              <div className="relative">
                <NavLink
                  to="/arts"
                  className={({ isActive }) =>
                    `hover:text-blue-500 block text-center ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Portfolio
                </NavLink>
                <button
                  onClick={() => setArtsOpen(!artsOpen)}
                  className="absolute top-0  left-1/2 ml-12"
                  id="artsToggle"
                >
                  <span className="text-sm">{artsOpen ? "▲" : "▼"}</span>
                </button>
              </div>
              <ul className={`mt-8 space-y-6 ${artsOpen ? "block" : "hidden"}`}>
                <li className="block px-4 text-lg">
                  <NavLink
                    to="/arts/illustration"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "active" : ""}`
                    }
                  >
                    Illustration
                  </NavLink>
                </li>
                <li className="block px-4 text-lg">
                  <NavLink
                    to="/arts/photography"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "active" : ""}`
                    }
                  >
                    Photography
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Arts item in desktop end */}
            <li className="relative hidden md:inline">
              <NavLink
                to="/arts"
                className={({ isActive }) =>
                  `hover:text-blue-500 ${isActive ? "active" : ""}`
                }
                onMouseEnter={() => showDropdown("arts")}
                onMouseLeave={() => hideDropdown("arts")}
              >
                Arts
              </NavLink>

              <ul
                className={`absolute -left-10 mt-2 w-38 bg-white rounded-lg shadow-lg
          transition-all duration-200 ease-out
          ${
            artsOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={() => hideDropdown("arts")}
                id="artsDropdown"
              >
                <li>
                  <NavLink
                    to="/arts/illustration"
                    className={({ isActive }) =>
                      `block px-4 py-2 ${isActive ? "active" : ""}`
                    }
                  >
                    Illustration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/arts/photography"
                    className={({ isActive }) =>
                      `block px-4 py-2 ${isActive ? "active" : ""}`
                    }
                  >
                    Photography
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-500 ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
