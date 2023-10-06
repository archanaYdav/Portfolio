import React from 'react';
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {RiTwitterXFill} from "react-icons/ri";

function Footer(props) {
    return (
        <footer>
            <a href='#' className='footer__logo'>Archana</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF /></a>
                <a href='https://instagram.com'><FiInstagram /></a>
                <a href='https://twitter.com'><RiTwitterXFill /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Portfolio. All Rights Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;