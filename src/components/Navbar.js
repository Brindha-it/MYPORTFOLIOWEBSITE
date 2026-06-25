import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const tabs = [
    { name: "Home", path: "/" },   // ✅ ADD THIS
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="tab-container">

        {tabs.map((tab) => (
          <NavLink to={tab.path} key={tab.name} className="tab-item">
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
    </div>
  );
}