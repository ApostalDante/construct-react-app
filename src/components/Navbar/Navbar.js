import './Navbar.css';
import React, { useState, useRef } from 'react';
import useClickOutside from '../useClickOutside';
import NavbarLogo from '../../images/konstruct.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Navbar() {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);
  const page = document.querySelector('.page');

  function toggleBurger() {
    setNav(!nav);
    page.classList.toggle('page_hidden');
  }

  useClickOutside(menuRef, closeBurger)

  function closeBurger() {
    setNav(false);
    page.classList.remove('page_hidden');
  };

  return (
    <section className='navbar'>
      <div className='navbar__container'>
        <nav className='navbar__nav'>
          <img className='navbar__logo' src={NavbarLogo} alt='Logo' />
          <ul className={`navbar__menu ${nav ? 'navbar__menu_active' : ''}`} ref={menuRef}>
            <li>
              <a onClick={closeBurger} className='navbar__link' href='##'>HOME</a>
            </li>
            <li>
              <a onClick={closeBurger} className='navbar__link' href='##'>ABOUT</a>
            </li>
            <li>
              <a onClick={closeBurger} className='navbar__link' href='##'>SERVICES</a>
            </li>
            <li>
              <a onClick={closeBurger} className='navbar__link' href='##'>WORK</a>
            </li>
            <li>
              <a onClick={closeBurger} className='navbar__link' href='#footer-contacts'>CONTACT</a>
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
