// src/components/Navbar.js
import React from 'react';
import { Link } 
	from 'react-router-dom';
// Import the external CSS file for Navbar styles
import '../style/Navbar.css'; 

const Navbar = () => {
	return (
		<nav className="navbar-container">
            <h1 style={{color:"black"}}>Teja Photography Page</h1>
			<div className="logo">
			</div>
			<ul className="nav-links">
				<li><Link to="/">
					Home
				</Link></li>
				<li>
					<Link to="/gallery">
					Gallery
					</Link>
				</li>
                <li>
					<Link to="/Contact">
					Contact Me
					</Link>
				</li>
				<li>
					<Link to="/mybio">
					MyBio
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
