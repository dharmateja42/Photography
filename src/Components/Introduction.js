import React from "react";
import Monkey from "../images/monkey1.jpg";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.jpg";



//import "../style/imgs.css";

const Introduction = () => {
	return (
		<>
			<div className="introduction">
				<div className="text">
					<h1>
						Your Photography
						Journey Begins Here
					</h1>
					<p>
						Discover the beauty
						through our lens...
					</p>
					<p>
						Capture moments, tell stories,
						and create memories that last a
						lifetime.
					</p>
					<button className="explore-button">
						Explore Now
					</button>
				</div>
				<div className="image">
					<img src={Monkey}
						alt="Introduction" style={{ width: '500px',height: '200px'}}
					/>
				</div>
			</div>
			<div className="buy-plans">
				<h2>Buy Plans and Subscriptions</h2>
				<p>
					Unlock premium features and exclusive
					content with our subscription
					plans.
				</p>
				<div className="subscription-options">
					{/* Placeholder content for subscription options */}
					<div className="subscription-option">
						<h3>Basic Plan</h3>
						<p>Access to a limited set of features</p>
						<p>$9.99/month</p>
						<button className="explore-button">
							Subscribe
						</button>
					</div>
					<div className="subscription-option">
						<h3>Pro Plan</h3>
						<p>
							Full access to all features
							and exclusive content
						</p>
						<p>$19.99/month</p>
						<button className="explore-button">
							Subscribe
						</button>
					</div>
				</div>
				<img src={img1} className="imgs"/><br />
				<img src={img2} className="imgs"/><br />
				<img src={img3} className="imgs"/><br />
				<img src={img4} className="imgs"/><br />
			</div>
		</>
	);
};

export default Introduction;
