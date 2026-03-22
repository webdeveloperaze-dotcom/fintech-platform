import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <motion.nav 
            className="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="logo">Brand</div>
            <ul className="nav-links">
                <li><a href="#">Ana səhifə</a></li>
                <li><a href="#">Forex alətləri</a></li>
                <li><a href="#">Kalkulyatorlar</a></li>
                <li><a href="#">Bazar</a></li>
                <li><a href="#">Bloq</a></li>
            </ul>
            <motion.button className="cta-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                CTA Button
            </motion.button>
            <div className="hamburger-menu">
                {/* Hamburger icon for mobile menu */}
                <span></span>
                <span></span>
                <span></span>
            </div>
        </motion.nav>
    );
};

export default Navbar;