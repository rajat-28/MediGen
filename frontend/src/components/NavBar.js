import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo (2).png'

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const navbarMenu = document.querySelector("#cs-navigation");
    const hamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    const handleHamburgerClick = () => {
      hamburgerMenu.classList.toggle("cs-active");
      navbarMenu.classList.toggle("cs-active");
      body.classList.toggle("cs-open");
      ariaExpanded();
    };

    hamburgerMenu.addEventListener("click", handleHamburgerClick);

    const ariaExpanded = () => {
      const csUL = document.querySelector("#cs-expanded");
      const csExpanded = csUL.getAttribute("aria-expanded");

      if (csExpanded === "false") {
        csUL.setAttribute("aria-expanded", "true");
      } else {
        csUL.setAttribute("aria-expanded", "false");
      }
    };

    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 100) {
        body.classList.add("scroll");
      } else {
        body.classList.remove("scroll");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      hamburgerMenu.removeEventListener("click", handleHamburgerClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
      const onClick = () => {
        item.classList.toggle('cs-active');
      }
      item.addEventListener('click', onClick);
      
      return () => {
        item.removeEventListener('click', onClick);
      };
    }
  }, []);

  return (
    <header id="cs-navigation">
      <div className="cs-container">
        <a href="/" className="cs-logo" aria-label="back to home">
          <img src={logo} alt="logo" width="350" height="39" aria-hidden="true" decoding="async"/>
        </a>
        <nav className="cs-nav" role="navigation">
          <button className="cs-toggle" aria-label="mobile menu toggle">
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>
          <div className="cs-ul-wrapper">
            <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
              <li className="cs-li">
                <Link to="/home">
                  <Nav.Link href="/home" className="cs-li-link cs-active">Home</Nav.Link>
                </Link>
              
              </li>
              
              <li className="cs-li">
              <Link to="/about">
                 <Nav.Link href="/about" className="cs-li-link">About Us</Nav.Link>
              </Link>
              </li>
            
              <li className="cs-li">
                
                <Link to="/login">
            <button className="vvd">Login</button>
                </Link>
              </li>
            </ul>
          </div>
            
        </nav>
        <div className="cs-contact-group">
          <div className="cs-social">
            <a href="" className="cs-social-link">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async"/>
            </a>
            <a href="" className="cs-social-link">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/twitter-1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async"/>
            </a>
            <a href="" className="cs-social-link">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async"/>
            </a>
            <a href="" className="cs-social-link">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/youtube1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async"/>
            </a>
          </div>
        </div>
        
      </div>
    </header>
  );
}
