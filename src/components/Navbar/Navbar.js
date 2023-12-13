import './Navbar.css';
import React, { useState } from 'react';
import NavbarLogo from '../../images/konstruct.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Navbar() {
  const [nav, setNav] = useState(false);

  function closeBurger() {
    setNav(false);
  };

  return (
    <section className='navbar'>
      <div className='navbar__container'>
        <nav className='navbar__nav'>
          <img className='navbar__logo' src={NavbarLogo} alt='Logo' />
          <ul className={`navbar__menu ${nav ? 'navbar__menu_active' : ''}`} >
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
          <div onClick={() => setNav(!nav)} className='navbar__button'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
