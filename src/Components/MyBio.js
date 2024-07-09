import React from 'react'
import { Link } from 'react-router-dom';
import myimage from "../images/myimg.png";
import "../style/Biopage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

function MyBio() {
  return (
    <div className='biopage'>
        <img src={myimage} />
        <h2><u>Dharma Teja Murala</u></h2>
        <h3>Photographer</h3>
        <p>Showcase your work
        Display your photographs with multiple formats, including full-screen slideshows,
         lightbox, and more. You can upload high-res images and set a focal point; we automatically 
        create perfectly cropped versions for your photography website on every device.
        Your photography website needs followers. From Instagram and Pinterest to Flickr and Smugmug, our 
        seamless social media integrations help photographers connect their audience everywhere.
        <br/>
        Display your photographs with multiple formats, including full-screen slideshows,
         lightbox, and more. You can upload high-res images and set a focal point; we automatically 
        create perfectly cropped versions for your photography website on every device.
        Your photography website needs followers. From Instagram and Pinterest to Flickr and Smugmug, our 
        seamless social media integrations help photographers connect their audience everywhere.
        <br/>
        Display your photographs with multiple formats, including full-screen slideshows,
         lightbox, and more. You can upload high-res images and set a focal point; we automatically 
        create perfectly cropped versions for your photography website on every device.
        Your photography website needs followers. From Instagram and Pinterest to Flickr and Smugmug, our 
        seamless social media integrations help photographers connect their audience everywhere.
        </p><br /><br />
        <div>
					<button className='cont-bio'><Link to="/Contact" style={{color:"white"}}>
					Contact Me
					</Link></button>
        </div><br /> <br />
        <footer className="footer">
				<div className="social-media">
					<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} size="3x" />
					</a><hr />
					<a href="https://www.linkedin.com/in/dharma-teja-murala-a57284251/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} size="3x" />
					</a><hr />
					<a href="https://myaccount.google.com/?pli=1" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGoogle} size="3x" />
					</a><hr/>
				</div>
			</footer>
    </div>
  )
}

export default MyBio