import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../Assets/Images/Logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 mb-0 bg-neutral text-neutral-content">
            <div className=''>
                <img src={footer} className="w-32 h-32 rounded-lg" alt="" />
                <p>Learn IT World.<br />Providing reliable tech since 2020</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;