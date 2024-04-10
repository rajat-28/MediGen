import React from "react";
import logo from '../assets/img/logo (2).png'
function Footer() {
  return (
    <div className="footer_new">
      <footer id="cs-footer-274">
        <div className="cs-container">
          {/* <!-- Logo Group --> */}
          <div className="cs-logo-group">
            <a aria-label="go back to home" className="cs-logo" href="/">
              {/* <!-- Remove the light class if you don't need the dark logo --> */}
              <img
                className="cs-logo-img"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src={logo}
                alt="logo"
                width="240"
                height="32"
              />
            </a>
            <div className="cs-social">
              <a
                className="cs-social-link"
                aria-label="visit google profile"
                href=""
              >
                <img
                  className="cs-social-img"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg"
                  alt="google"
                  width="11"
                  height="11"
                />
              </a>
              <a
                className="cs-social-link"
                aria-label="visit facebook profile"
                href=""
              >
                <img
                  className="cs-social-img"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg"
                  alt="facebook"
                  width="6"
                  height="11"
                />
              </a>
              <a
                className="cs-social-link"
                aria-label="visit instagram profile"
                href=""
              >
                <img
                  className="cs-social-img"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg"
                  alt="instagram"
                  width="11"
                  height="11"
                />
              </a>
            </div>
          </div>
          {/* <!-- Links --> */}
          <ul className="cs-nav">
            <li className="cs-nav-li">
              <span className="cs-header">Contact</span>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="tel:123-456 7890">
                62839-*****
              </a>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="mailto:info@codestitch.com">
                info@medigen.com
              </a>
            </li>
          </ul>
          <ul className="cs-nav">
            <li className="cs-nav-li">
              <span className="cs-header">Address</span>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="">
                123 Avenue Street,
                <br />Barnala
              </a>
            </li>
          </ul>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
