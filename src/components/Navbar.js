import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Portfolio
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <div className={`tab-container ${menuOpen ? "active" : ""}`}>

        {tabs.map((tab) => (

          <NavLink
            key={tab.name}
            to={tab.path}
            className="tab-item"
            onClick={() => setMenuOpen(false)}
          >
            {({ isActive }) => (
              <>
                {tab.name}

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="active-tab"
                  />
                )}
              </>
            )}
          </NavLink>

        ))}

      </div>

    </nav>
  );
}