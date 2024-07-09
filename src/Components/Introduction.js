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
import varun from "../images/varun.jpg";
import sivaram from "../images/sivaram.jpg";

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
				</div><br /><br />
				<h1 align="center"><u>My Favourites</u></h1>
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
			</div><br /><br />
			<h1 align="center">Authors</h1>
			<div className="subscription-options">
					<div className="subscription-option">
						<img src={varun} /><h3>Varun Aditya</h3>
						<p style={{color:"black"}}>Varun Aditya Tamil Language:வரூன் ஆதித்யா born on 19 January 1991, 
							is an Indian wildlife photographer and environmentalist. His work has garnered recognition,
							 highlighted by his first-place achievement as the National Geographic Nature Photographer of the Year in 2016.
						</p>
						<button><a href="https://en.wikipedia.org/wiki/Varun_Aditya">Explore</a></button>
					</div>
					<div className="subscription-option">
					<img src={sivaram} /><h3>Sudhir Shivaram </h3>
						<p style={{color:"black"}}>Sudhir Shivaram is an Indian photographer. 
							His photography focuses on raising awareness for environmental conservation.
						</p>
						<button><a href="https://www.sudhirshivaramphotography.com/online-photography-courses/?utm_source=google_ads&utm_medium=cpc&utm_campaign=ADB_Search_Brand&gad_source=1&gclid=Cj0KCQjwv7O0BhDwARIsAC0sjWP5zt_lHM7OJybjW56OPD1B5OIwop3LdULCGeocxdkBZPmjyp5vIrsaApHaEALw_wcB">Explore</a></button>	
					</div>
				</div><br /><br />
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
					<p className="bottom">&copy; 2024 Teja Photography. All rights reserved.</p>
				    </div>
				</div>
			</footer>
		</>
	);
};

export default Introduction;
