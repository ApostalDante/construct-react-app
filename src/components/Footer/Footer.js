import './Footer.css';
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import FooterLogo from '../../images/footer-logo.svg';
import facebook from '../../images/fb.svg';
import twitter from '../../images/tw.svg';
import google from '../../images/goo.svg';


function Footer() {
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
  const dateThisYear = new Date().getFullYear();
  const [showLinks, setShowLinks] = React.useState(false);
  const [showContacts, setShowContacts] = React.useState(false);

  const linkElement = clientWidth <= 620 ? <h2 className='footer__title' onClick={handleShowLinks}>LINKS</h2> :
    <h2 className='footer__title'>LINKS</h2>;
  const contactElement = clientWidth <= 400 ? <h2 className='footer__title' onClick={handleContacts}>CONTACT US</h2> :
    <h2 className='footer__title'>CONTACT US</h2>;

  useEffect(() => {
    const handleResize = () => {
      setClientWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleShowLinks() {
    showLinks ? setShowLinks(false) : setShowLinks(true);
  };

  function handleContacts() {
    showContacts ? setShowContacts(false) : setShowContacts(true);
  };

  return (
    <footer className='footer' id='footer-contacts'>
      <div className='footer__row'>

        <div className='footer__company'>
          <h2 className='footer__title'>COMPANY</h2>
          <img className='footer__logo'
            alt='Logo'
            src={FooterLogo} />
          <p className='footer__description'>
            Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>

        <div className={`footer__links ${showLinks ? 'footer__links_absolute' : ''}`}>
          {linkElement}
          <ul className={`footer__links-list ${showLinks ? 'footer__links-list_visible' : ''}`}>
            <li className='footer__link-item'><Link className='footer__link' to="header" smooth={true} duration={1500}>HOME</Link></li>
            <li className='footer__link-item'><Link className='footer__link' to="about" smooth={true} duration={1300} offset={-10}>ABOUT</Link></li>
            <li className='footer__link-item'><Link className='footer__link' to="services" smooth={true} duration={1000} offset={-20}>SERVICES</Link></li>
            <li className='footer__link-item'><Link className='footer__link' to="project" smooth={true} duration={1000} offset={-20}>PROJECTS</Link></li>
            <li className='footer__link-item'><Link className='footer__link' to="footer-contacts" smooth={true} duration={100}>CONTACT US</Link></li>
          </ul>

          <ul className={`footer__links-list ${showLinks ? 'footer__links-list_visible' : ''}`}>
            <li className='footer__link-item'><a className="footer__link" href="##">FAQ</a></li>
            <li className='footer__link-item'><a className="footer__link" href="##">TERMS</a></li>
            <li className='footer__link-item'><a className="footer__link" href="##">CAREERS</a></li>
          </ul>

          <ul className={`footer__links-list ${showLinks ? 'footer__links-list_visible' : ''}`}>
            <li className='footer__link-item'><a className="footer__link" href="##">BLOG</a></li>
            <li className='footer__link-item'><a className="footer__link" href="##">PARTNERS</a></li>
            <li className='footer__link-item'><a className="footer__link" href="##">NEWS</a></li>
          </ul>
        </div>

        <div className='footer__contacts' >
          {contactElement}
          <p className={`footer__contact ${showContacts ? 'footer__contact_visible' : ''}`}>213 Baker Street<br /> Oriel City Kounty<br /> 7000 KNW,<br /> Kountry Name</p>
          <p className={`footer__contact ${showContacts ? 'footer__contact_visible' : ''}`}>+23 994 233 4022</p>
          <p className={`footer__contact ${showContacts ? 'footer__contact_visible' : ''}`}>info@konstruct.com</p>
        </div>

        <div className='footer__socials'>
          <a className='footer__social' href='https://www.facebook.com' target='_blank' rel='noreferrer'>
            <img className='footer__social-img' alt='facebook' src={facebook} />
          </a>
          <a className='footer__social' href='https://twitter.com' target='_blank' rel='noreferrer'>
            <img className='footer__social-img' alt='twitter' src={twitter} />
          </a>
          <a className='footer__social' href='https://www.google.com' target='_blank' rel='noreferrer'>
            <img className='footer__social-img' alt='google' src={google} />
          </a>
        </div>

      </div>
      <p className="footer__copyright">&#169; {dateThisYear} Konstruct Inc. Designed by Jane Kathryn Teo</p>
    </footer>
  );
};

export default Footer;
