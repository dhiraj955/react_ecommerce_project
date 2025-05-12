import React from "react";
import "./Footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer">
        <div className="logo-section">
          <h1>SHOP.CO</h1>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="social-media">
            <IoLogoTwitter />
            <FaFacebook />
            <FaGithub />
            <IoLogoInstagram />
          </div>
        </div>

        <div className="footer-links">
          <ul className="company">
            <h4>COMPANY</h4>
            <li>About </li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
          <ul className="help">
            <h4>HELP</h4>
            <li>Customer Support </li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="faq">
            <h4>FAQ</h4>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payment</li>
          </ul>
          <ul className="help">
            <h4>RESOURCES</h4>
            <li>Free eBook</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-down">
        <p>Shop.co © 2000-2025, All Rights Reserved</p>
        <div className="footer-payment">
          <img
            src="src/assets/epay.png"
            alt=""
            height={"25px"}
            width={"40px"}
          />
          <img
            src="src/assets/gpay.png"
            alt=""
            height={"25px"}
            width={"40px"}
          />
          <img
            src="src/assets/orange.png"
            alt=""
            height={"25px"}
            width={"40px"}
          />
          <img
            src="src/assets/visa.png"
            alt=""
            height={"25px"}
            width={"40px"}
          />
          <img
            src="src/assets/paypal.png"
            alt=""
            height={"25px"}
            width={"40px"}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
