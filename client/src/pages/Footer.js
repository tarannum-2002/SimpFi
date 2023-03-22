import React from "react";
import * as Components from "./Components";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <h1>
          Let's <br />
          promote <br /> good <br /> business.
        </h1>
      </div>
      <div className="footer-right">
        <h1>KNOW MORE ABOUT US</h1>
        <p className="icon">
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaTwitter />
          </div>
        </p>
        <p className="address">
          <b>WRITE TO US</b>
          <br />
          123 Anywhere street, any city, state, country
        </p>

        <p className="email">
          <b>EMAIL US</b>
          <br />
          hello@reallygreatsite.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
