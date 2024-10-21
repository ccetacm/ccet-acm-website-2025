import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';  // Import Framer Motion
import acmLogo from '../acm-assets/ccet-logo-white.png';



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
        <footer className="bg-[#0E0C15] py-10">
            <motion.div
                className="container mx-auto px-4 md:px-0"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us Section */}
                    <motion.div className="footer-widget-box" variants={fadeInUp}>
                        <a href="./index.html" className="footer-logo">
                            <img src={acmLogo} alt="ACM Logo" className="w-60 mb-5" />
                        </a>
                        <p className="text-gray-300 mb-5 text-justify">
                            ACM boosts up the potential and talent, supporting the overall development needs of our students to facilitate a structured path from education to employment by providing a safe and supported space where creative talent and imagination can flourish in a caring environment.
                        </p>
                        <div className="footer-contact">
                            <ul>
                                <li className="text-gray-300 flex items-center mb-2">
                                    <FiMapPin className="text-gray-400 mr-2" /> CCET, SECTOR-26, CHANDIGARH
                                </li>
                            </ul>
                        </div>
                        <ul className="footer-social flex gap-4 mt-6">
                            {[
                                { icon: <FaFacebookF />, link: 'https://www.facebook.com/acmccet' },
                                { icon: <FaInstagram />, link: 'https://www.instagram.com/acmccet' },
                                { icon: <FaTwitter />, link: 'https://twitter.com/acmccet' },
                                { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UCdqrwqNB9ibYjFpBkMA-4iQ' },
                                { icon: <FaEnvelope />, link: 'mailto:acm@ccet.ac.in' },
                                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ccet-acm-student-chapter' },
                            ].map(({ icon, link }, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <a href={link} className="social-icon text-gray-300 hover:text-gray-100 transition duration-200">
                                        <div className="text-3xl border border-gray-600 rounded-full p-3 hover:bg-gray-600">
                                            {icon}
                                        </div>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Explore Section */}
                    <motion.div className="footer-widget-box" variants={fadeInUp}>
                        <h4 className="footer-heading text-gray-300 mb-4">Explore</h4>
                        <div className="footer-divider mb-4 border-b border-gray-600 underline-animation"></div>
                        <ul className="footer-list flex flex-col gap-2">
                            {['About', 'Home', 'Team', 'Achievements', 'ACM-W'].map((item, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={`${item.toLowerCase()}.html`}
                                        className="text-gray-300 hover:underline transition duration-200"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ x: -5 }}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Us Section */}
                    <motion.div className="footer-widget-box" variants={fadeInUp}>
                        <h4 className="footer-heading text-gray-300 mb-4">Contact Us</h4>
                        <div className="footer-divider mb-4 border-b border-gray-600 underline-animation"></div>
                        <p className="text-gray-300 mb-4">
                            Chandigarh College of Engineering and Technology Degree Wing Sector - 26, Chandigarh<br />
                            Website: <a href="https://www.ccet.ac.in/" className="text-gray-100 underline">www.ccet.ac.in</a>
                        </p>
                        <div className="subscribe-form flex flex-col gap-2">
                            {['WEBMASTERS', 'MAGAZINE', 'Get in Touch'].map((text, index) => (
                                <motion.a
                                    key={index}
                                    href={text === 'Get in Touch' ? 'https://docs.google.com/forms/d/e/1FAIpQLScwriiRgKswfp6tReRJN8t6f7PggjOFpDfYdYNmV0WfJW_0AA/viewform' : '#'}
                                    target={text === 'Get in Touch' ? '_blank' : '_self'}
                                    className="theme-btn bg-transparent border border-gray-600 text-gray-300 py-3 px-6 rounded hover:bg-gray-600 hover:text-white transition duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {text}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Copyright Section */}
            <motion.div className="bg-[#0E0C15] py-4" variants={fadeIn}>
                <div className="container mx-auto text-center">
                    <p className="text-gray-300 mb-0">
                        Copyright © {new Date().getFullYear()} All rights reserved | Developed by{' '}
                        <a href="./web-masters.html" className="text-gray-100 underline">CCET ACM Website Team</a>
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
