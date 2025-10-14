import React, { useState, CSSProperties } from "react";
import { Link } from "react-router-dom";

const NavBarMenuApp: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Styles
  const navbar: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: "10px 20px",
  };

  const brand: CSSProperties = {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const navLinks: CSSProperties = {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  };

  const navLinkItem: CSSProperties = {
    marginLeft: "20px",
    position: "relative",
  };

  const linkStyle: CSSProperties = {
    color: "white",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const dropdownContent: CSSProperties = {
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "#333",
    minWidth: "100px",
    listStyle: "none",
    padding: "5px 0",
    borderRadius: "4px",
    zIndex: 1000,
  };

  const dropdownItem: CSSProperties = {
    padding: "5px 15px",
  };

  const dropdownItemLink: CSSProperties = {
    color: "white",
    textDecoration: "none",
    display: "block",
  };

  const dropbtn: CSSProperties = {
    ...linkStyle,
  };

  return (
    <nav style={navbar}>
      <div style={brand}>Moja Aplikacja</div>
      <ul style={navLinks}>
        <li style={navLinkItem}>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
        </li>
        {/* <li style={navLinkItem}>
          <Link to="" style={linkStyle}>
            About
          </Link>
        </li> */}
        <li style={navLinkItem}>
          <button onClick={toggleDropdown} style={dropbtn}>
            Labs ▼
          </button>
          {dropdownOpen && (
            <ul style={dropdownContent}>
              {Array.from({ length: 9 }, (_, i) => (
                <li key={i} style={dropdownItem}>
                  <Link to={`/lab${i + 1}`} style={dropdownItemLink}>
                    Lab {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMenuApp;
