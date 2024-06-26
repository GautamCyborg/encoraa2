import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/all.min.css';
import '../../assets/css/swiper-bundle.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/animate.css';
import '../../assets/css/nice-select.css';
import '../../assets/css/style.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleSubMenuToggle = (index) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <header className="header">
      <div className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-menu">
              <Link to="/"><img src={'/images/encoraa-logo-d.png'} alt="logo" /></Link>
            </div>
            <div className="header-bar d-xl-none" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className={`main-menu ${menuActive ? 'active' : ''}`}>
              <li className={`header-menu-bg ${isActive('/') ? 'active' : ''}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`header-menu-bg ${pathname.includes('/services') ? 'active' : ''}`}>
                <Link to="#" onClick={(e) => { e.preventDefault(); handleSubMenuToggle(1); }}>
                  Services<i className="fas fa-chevron-down"></i>
                </Link>
                <ul className={`sub-menu ${subMenuOpen[1] ? 'open' : ''}`}>
                  <li><Link to="/Home" className={isActive('/Home') ? 'active' : ''}>Eco-Sustenance</Link></li>
                  <li><Link to="/consulting" className={isActive('/consulting') ? 'active' : ''}>Consulting</Link></li>
                  <li><Link to="/training" className={isActive('/training') ? 'active' : ''}>Training</Link></li>
                </ul>
              </li>
              <li className={`header-menu-bg ${isActive('/technology') ? 'active' : ''}`}>
                <Link to="/technology">Technology</Link>
              </li>
              <li className={`header-menu-bg ${isActive('/TreeRegistry') ? 'active' : ''}`}>
                <Link to="/TreeRegistry">Tree Registry</Link>
              </li>
              <li className={`header-menu-bg ${isActive('/trees') ? 'active' : ''}`}>
                <Link to="/trees">Trees</Link>
              </li>
              <li className={`header-menu-bg ${isActive('/map') ? 'active' : ''}`}>
                <Link to="/map">Map</Link>
              </li>
              <li className={`header-menu-bg ${pathname.includes('/statistics') ? 'active' : ''}`}>
                <Link to="/statistics/chart">Statistics</Link>
              </li>
              <li className={`header-menu-bg ${isActive('/upload') ? 'active' : ''}`}>
                <Link to="/upload">Upload</Link>
              </li>
              <li className={`header-menu-bg ${isActive('/contact') ? 'active' : ''}`}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
