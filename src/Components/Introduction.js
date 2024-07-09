import React from "react";
import Monkey from "../images/monkey1.jpg";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Introduction = () => {
	return (
		<>
			<div className="introduction">
				<div className="text">
					<h1>Your Photography Journey Begins Here</h1>
					<p>Discover the beauty through our lens...</p>
					<p>Capture moments, tell stories, and create memories that last a lifetime.</p>
					<button className="explore-button">Explore Now</button>
				</div>
				<div className="image">
					<img src={Monkey} alt="Introduction" style={{ width: '500px', height: '300px' }} />
				</div>
			</div>
			<div className="buy-plans">
				<h2>Buy Plans and Subscriptions</h2>
				<p>Unlock premium features and exclusive content with our subscription plans.</p>
				<div className="subscription-options">
					<div className="subscription-option">
						<h3>Basic Plan</h3>
						<p>Access to a limited set of features</p>
						<p>Rs.199/-month</p>
						<button className="explore-button">Subscribe</button>
					</div>
					<div className="subscription-option">
						<h3>Pro Plan</h3>
						<p>Full access to all features and exclusive content</p>
						<p>Rs.1,999/-month</p>
						<button className="explore-button">Subscribe</button>
					</div>
				</div>
				<h1><u>My Favourites</u></h1>
				<div className="img-container">
					<img src={img1} className="imgs" alt="favorite1" />
					<img src={img2} className="imgs" alt="favorite2" />
					<img src={img3} className="imgs" alt="favorite3" />
					<img src={img4} className="imgs" alt="favorite4" />
					<img src={img5} className="imgs" alt="favorite5" />
					<img src={img6} className="imgs" alt="favorite6" />
					<img src={img7} className="imgs" alt="favorite7" />
					<img src={img8} className="imgs" alt="favorite8" />
					<img src={img9} className="imgs" alt="favorite9" />
					<img src={img10} className="imgs" alt="favorite10" />
					<img src={img11} className="imgs" alt="favorite11" />
				</div>
			</div>
			<footer className="footer">
				<div className="social-media">
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebook} size="3x" />
					</a>
					<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} size="3x" />
					</a>
					<a href="https://www.linkedin.com/in/dharma-teja-murala-a57284251/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} size="3x" />
					</a>
					<a href="https://myaccount.google.com/?pli=1" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGoogle} size="3x" />
					</a><hr />
					<div className="copyright">
					<p className="bottom">&copy; 2024 <hr />Teja Photography. All rights reserved.</p>
				</div>
				</div>
			</footer>
		</>
	);
};

export default Introduction;
