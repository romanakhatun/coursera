import React from 'react';
import './header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>

            <nav className="nav">
                <ul>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li><Link to="/enrollment-options">Enrollment Options</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;