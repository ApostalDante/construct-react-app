import './Popup.css';
import { useRef } from 'react';
import useClickOutside from '../useClickOutside/useClickOutside';


function Popup({ text, isOpen, onClose }) {
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) onClose()
  })
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container" ref={menuRef}>
        <p className="popup__text">{text}</p>
        <button className="popup__close" type="button" onClick={onClose}>ok</button>
      </div>
    </section>
  );
};

export default Popup;