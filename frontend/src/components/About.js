import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import side_img from "../assets/img/about.jpg";
import banner from "../assets/img/about_1.jpg";
export default function About() {
  return (
    <div>
      <NavBar />
      <section id="hero-1785">
        <div className="cs-container d-flex justify-content-start">
          <div className="cs-content">
            {/* <span className="cs-topper">
              <b>Medigen: </b>Vitality Redefined Daily
            </span> */}
            <h1 className="cs-title" style={{color:'gray'}}  >
              Largest Digital Healthcare Platform
            </h1>
            <h3 style={{color:'lightgray'}} className="my-5" >
            Giving customers 24x7 access to high-quality healthcare.
            </h3>
          </div>
        </div>

        {/* Background Image */}
        <picture className="cs-background">
          <source media="(max-width: 600px)" srcSet={banner} />
          <source media="(min-width: 601px)" srcSet={banner} />
          <img
            loading="lazy"
            decoding="async"
            src={banner}
            alt="field"
            width="1920"
            height="1200"
            aria-hidden="true"
          />
        </picture>

        <img
          className="cs-graphic"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-splatter2.svg"
          alt="graphic"
          height="161"
          width="1920"
          loading="lazy"
          decoding="async"
        />
        {/*This is a dark version. Download the image and change the fill color to match the color of the section background below it*/}
        <img
          className="cs-graphic cs-graphic-dark"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/dark-mode-splatter2.svg"
          alt="graphic"
          height="161"
          width="1920"
          loading="lazy"
          decoding="async"
        />
      </section>

{/* About */}


<section id="content-page-852">
    <div className="cs-container">
        <div className="cs-content">
            <h1 className="cs-title">WE ARE <span className="cs-color">MEDIGEN.</span> AN END-TO-END DIGITAL HEALTHCARE PLATFORM</h1>
            
            <p>
            When the webslinger wears his red and blue suit, he's ready to save a life. Same rule applies to us at MediGen. We’re no fictional superhero, but we do know how to weave a web of doctors, hospitals, healthcare providers, pharmaceuticals, and insurance companies to create a world of possibilities for people looking for healthcare assistance.
            </p>
            
            <ol>
                <li>Cutting-edge Healthcare: Medigen pioneers advanced medical technologies and treatments.</li>
                <li>Innovation Hub: At the forefront of medical innovation, Medigen constantly seeks to enhance patient care.</li>
                <li>Trusted Partner: Patients trust Medigen for reliable and effective healthcare insights.</li>
            
            
                <li>Community Impact: Medigen contributes positively to the health and well-being of the community.</li>
                <li>Accessibility: Medigen strives to make quality healthcare accessible to all, regardless of background or location.</li>
                <li>Visionary Leadership: Guided by visionary leaders, Medigen continues to redefine healthcare standards.</li>
            </ol>
        </div>
        <div className="cs-image-group">
            <picture className="cs-picture">
                {/* <!--Mobile Image--> */}
                <source media="(max-width: 600px)" srcset={side_img}/>
                {/* <!--Tablet and above Image--> */}
                <source media="(min-width: 601px)" srcset={side_img}/>
                <img decoding="async" src={side_img} alt="person" width="542" height="520" aria-hidden="true"/>
            </picture>
        </div>
    </div>
</section>
                                

{/* Vision */}

      <section id="pricing-1387">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Features</span>
            <h2 className="cs-title">
            Personalized Solutions for Medical Insights
            </h2>
            <p className="cs-text">
            In the dawn of technological advancement, Medigen strides confidently into the future, offering unparalleled healthcare solutions.
            </p>
          </div>
          <ul className="cs-card-group cs-option1">
            <li className="cs-item cs-popular">
              <div className="cs-flex">
                <span className="cs-package">Our Vision</span>
              </div>
              <div className="cs-info">
                <li className="cs-text my-5">
                  To innovate healthcare, enhancing wellness, improving
                  outcomes, and empowering healthier lives.
                </li>
              </div>
            </li>
            <li className="cs-item">
              <div className="cs-flex">
                <span className="cs-package" style={{ color: "black" }}>
                  Our Mission
                </span>
              </div>
              <div className="cs-info">
                <li className="cs-text my-5">
                  Medigen collaborates to deliver personalized, data-driven
                  solutions, transforming healthcare accessibility and promoting
                  global well-being.
                </li>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
