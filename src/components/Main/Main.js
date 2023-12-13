import "./Main.css";
import React from 'react';
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Services from "../Services/Services";
import GetInTouch from '../GetInTouch/GetInTouch';
import Newsletter from '../Newsletter/Newsletter';
import Popup from '../Popup/Popup';


function Main() {
  const [popupTitle, setPopupTitle] = React.useState('');
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  function openPopup(textError) {
    setPopupTitle(textError);
    setIsOpenPopup(true);
  };

  function closePopup() {
    setIsOpenPopup(false);
    setPopupTitle('');
  };

  return (
    <main className="main">
      <Navbar />
      <About />
      <Services openPopup={openPopup} />
      <GetInTouch openPopup={openPopup} />
      <Newsletter openPopup={openPopup} />
      <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />
    </main>
  );
};

export default Main;