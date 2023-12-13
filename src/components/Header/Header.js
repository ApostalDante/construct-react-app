import './Header.css';
import HeaderLogo from '../../images/header-logo.svg';

function Header() {

  return (
    <header className='header' id='header'>
      <img className='header__logo'
        alt='Logo'
        src={HeaderLogo} />
      <h1 className='header__title'>PARTNER WITH KONSTUCT</h1>
      <p className='header__description'>An award-winning construction management firm</p>
      <a className="header__link" href="#about-project" >SCROLL DOWN</a>
    </header>
  );
};

export default Header;
