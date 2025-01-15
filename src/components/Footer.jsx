import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div  class="mt-[120px]">

        <hr class="footer-line"/>

        <footer class="footer">

        <div class="f-container">
          <div class="row">
            <div class="footer-col">
              <h4>CCET ACM</h4>
              <ul>
                <li><a href="/about">about us</a></li>
                <li><a href="/resources">resources</a></li>
                <li><a href="/gallery">gallery</a></li>
                <li><a href="/events">events</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>explore</h4>
              <ul>
                <li><a href="/about">about</a></li>
                <li><a href="/">home</a></li>
                <li><a href="/team">team</a></li>
                <li><a href="/achievements">achievements</a></li>
                <li><a href="/acmw">acm-w</a></li>
              </ul>
            </div>
            <div id="footer" class="footer-col">
              <h4>contact us</h4>
              <ul>
                <li><a href="/webmasters">webmasters</a></li>
                <li><a href="/magazine">magazine</a></li>
                <li><a href="/contact">get in touch</a></li>
                <li><a href="/contact">contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="https://www.facebook.com/acmccet" target="_blank" class="icons"><FaFacebookF/></a>
                <a href="https://www.instagram.com/acmccet/" target="_blank" class="icons"><FaInstagram/></a>
                <a href="https://x.com/acmccet" target="_blank"class="icons"><FaTwitter/></a>
                {/* <!-- <a href="#"><i class="icons fab fa-linkedin-in"></i></a> --> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
};

export default Footer;
