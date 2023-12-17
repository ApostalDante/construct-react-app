import './GetInTouch.css';


function GetInTouch({ openPopup }) {
  function getInfo() {
    openPopup('GET IN TOUCH - отсутствует')
  };

  return (
    <section className='getInTouch' id='getInTouch'>
      <div className='getInTouch__row'>
        <h2 className='getInTouch__title'>Want to build <br /> something amazing?</h2>
        <button type="button" className='getInTouch__button' onClick={getInfo}>GET IN TOUCH</button>
      </div>
    </section>
  );
};

export default GetInTouch;
