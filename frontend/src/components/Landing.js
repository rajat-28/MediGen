import React from 'react'
import NavBar from './NavBar'
import banner from '../assets/img/banner.jpg'
import { Link } from "react-router-dom";
import Footer from './Footer';

function Landing() {
  return (
    <div>
        <NavBar/>
        <section id="hero-1785">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper"><b>Medigen: </b>Vitality Redefined Daily</span>
                    <h1 className="cs-title" style={{color:''}}>Elevating Your Health Journey</h1>
                    <h2 className="cs-text" style={{color:'lightgray'}}>
                    Your Ultimate Destination for Health Transformation. Unleash Your Strength, Transform Your Life.    
                    </h2>
                    <div className="cs-button-group">
                        <Link to="/upload">
                            <a href="" className="cs-button-solid cs-button1">Upload Image</a>
                        </Link>
                        
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <picture className="cs-background">
                <source media="(max-width: 600px)" srcSet={banner} />
                <source media="(min-width: 601px)" srcSet={banner} />
                <img loading="lazy" decoding="async" src={banner} alt="field" width="1920" height="1200" aria-hidden="true" />
            </picture>

            <img className="cs-graphic" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-splatter2.svg" alt="graphic" height="161" width="1920" loading="lazy" decoding="async" />
            {/*This is a dark version. Download the image and change the fill color to match the color of the section background below it*/}
            <img className="cs-graphic cs-graphic-dark" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/dark-mode-splatter2.svg" alt="graphic" height="161" width="1920" loading="lazy" decoding="async" />
        </section>
        <Footer/>
    </div>
  )
}

export default Landing