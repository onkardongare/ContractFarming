import React from 'react';
import '../styles/header.css';
import logo from '../assets/logo.png';
import LanguageSelector from './languageselector';
import { Link } from 'react-router-dom';
import langchange from '../assets/langchange.png'
import loginlogo from '../assets/loginlogo.webp'

function Header() {
  return (
    <header className="header">
        <Link to="/" className="flex-none w-20 ml-10 ">
                <img alt="logo" src={logo} className='logo' />
        </Link>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <img alt='language-change-option' src={langchange} className='langchangeimg h-10'/>
        <div className="language-selector">
            <LanguageSelector />
        </div>
        <Link to="/login" className="flex-none w-20 ml-10 ">
                <span>
                  <img alt="logo" src={loginlogo} className='loginlogo' />
                  <p>log in</p>
                </span>
                
        </Link>
      </nav>
    </header>
  );
}

export default Header;
