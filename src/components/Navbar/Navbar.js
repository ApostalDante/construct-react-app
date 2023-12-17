import './Navbar.css';
import React, { useState, useRef } from 'react';
import useClickOutside from '../useClickOutside/useClickOutside';
import NavbarLogo from '../../images/konstruct.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";


function Navbar() {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);
  const page = document.querySelector('.page');

  function toggleBurger() {
    if (!nav) scroll.scrollTo(690);
    setNav(!nav);
    page.classList.toggle('page_hidden');
  }

  useClickOutside(menuRef, closeBurger)

  function closeBurger() {
    setNav(false);
    page.classList.remove('page_hidden');
  };

  return (
    <section className='navbar' id='navbar'>
      <div className='navbar__container'>
        <nav className='navbar__nav'>
          <img className='navbar__logo' src={NavbarLogo} alt='Logo' />
          <ul className={`navbar__menu ${nav ? 'navbar__menu_active' : ''}`} ref={menuRef}>
            <li>
              <Link className='navbar__link' to="header" smooth={true} duration={500} onClick={closeBurger}>HOME</Link>
            </li>
            <li>
              <Link className='navbar__link' to="about" smooth={true} duration={500} offset={-10} onClick={closeBurger}>ABOUT</Link>
            </li>
            <li>
              <Link className='navbar__link' to="services" smooth={true} duration={1000} offset={-20} onClick={closeBurger}>SERVICES</Link>
            </li>
            <li>
              <Link className='navbar__link' to="getInTouch" smooth={true} duration={1300} onClick={closeBurger}>WORK</Link>
            </li>
            <li>
              <Link className='navbar__link' to="footer-contacts" smooth={true} duration={1500} onClick={closeBurger}>CONTACT</Link>
            </li>
          </ul>
          <div onClick={toggleBurger} className='navbar__button'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
