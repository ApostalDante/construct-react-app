import './Header.css';
import HeaderLogo from '../../images/header-logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {

  return (
    <header className='header' id='header'>
      <img className='header__logo'
        alt='Logo'
        src={HeaderLogo} />
      <h1 className='header__title'>PARTNER WITH KONSTUCT</h1>
      <p className='header__description'>An award-winning construction management firm</p>
      <Link className='header__link' to="navbar" smooth={true} duration={1000}>SCROLL DOWN</Link>
    </header>
  );
};

export default Header;
