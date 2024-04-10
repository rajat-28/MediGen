import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Signup() {

  const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:4500/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }


  return (
    <div>
      <NavBar/>
    <div className="my-5">
      <section id="contact-1388">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Contact Us</span>
            <h2 className="cs-title">Get in Touch</h2>
            <p className="cs-text">
              We are a team of passionate and innovative individuals dedicated
              to shaping impactful solutions that enhance wellness and redefine
              healthcare.
            </p>
            <ul className="cs-ul">
              <li className="cs-li">
                <picture className="cs-icon-wrapper">
                  <img
                    aria-hidden="true"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg"
                    alt="phone icon"
                    className="cs-icon"
                    width="40"
                    height="40"
                    decoding="async"
                  />
                </picture>
                <div className="cs-flex-group">
                  <span className="cs-header">Phone</span>
                  <a
                    href="tel:888-4565-789
                        "
                    className="cs-link"
                  >
                    +91 62839-*****
                  </a>
                </div>
              </li>
              <li className="cs-li">
                <picture className="cs-icon-wrapper">
                  <img
                    aria-hidden="true"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg"
                    alt="address icon"
                    className="cs-icon"
                    width="40"
                    height="40"
                    decoding="async"
                  />
                </picture>
                <div className="cs-flex-group">
                  <span className="cs-header">Email</span>
                  <a href="mailto:Email@stitch.com" className="cs-link">
                    info@medigen.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <!--Form--> */}
          <form
            className="cs-form"
            id="cs-form-1388"
            name="Contact Form"
            method="post"
            onSubmit={handleSubmit}
          >
            <h3 className="cs-h3">Let's Connect</h3>
            <label className="cs-label form-label">
              Name
              <input
                className="cs-input form-control"
                required
                type="text"
                id="name-1388"
                name="name"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                
              />
            </label>
            <label className="cs-label cs-email form-label">
              Email
              <input
                className="cs-input form-control"
                required
                type="email"
                id="email-1388"
                name="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className="cs-label cs-password  form-label">
              Password
              <input
                className="cs-input form-control"
                required
                type="password"
                id="password-1388"
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            
            <button className="cs-button-solid cs-submit" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </section>
    </div>
    <Footer/>
    
    
      </div>
  );
}
