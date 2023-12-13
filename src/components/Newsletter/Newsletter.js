import './Newsletter.css';
import React from 'react';
import isEmail from 'validator/lib/isEmail';


function Newsletter({ openPopup }) {
  const [errorEmail, setErrorEmail] = React.useState('');
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);
  const [email, setEmail] = React.useState('');

  function handleEmailChange(evt) {
    const value = evt.target.value;
    if (!isEmail(value)) {
      setButtonDisabled(false);
      setEmail(value)
      setErrorEmail('Некорректый адрес почты');
    } else {
      setEmail(value)
      setErrorEmail('');
      setButtonDisabled(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    openPopup(`email: ${email} отправлен`)
    setEmail('');
    setButtonDisabled(false);
  };

  return (
    <section className='newsletter'>
      <div className='form__container'>
        <h2 className='newsletter__title'>Newsletter Signup</h2>
        <form className='newsletter__form' onSubmit={handleSubmit}>

          <div className='newsletter__items'>
            <input
              className={`newsletter__input ${errorEmail ? 'newsletter__input_type_color-error' : ''}`}
              value={email}
              placeholder='test@youremail.com'
              type='email'
              onChange={handleEmailChange}
              required
            />
            <span className={`newsletter__error ${errorEmail ? 'newsletter__error_type_active' : ''}`}>{errorEmail}</span>
          </div>
          <button className={`newsletter__button ${!isButtonDisabled ? 'newsletter__button_type_disabled' : ''}`} type="submit" disabled={!isButtonDisabled}>SIGNUP</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
