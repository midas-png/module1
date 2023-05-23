import { Logo } from 'ui';
import './styles.css';

export const Footer = () => (
  <div className='footer__wrapper'>
    <footer className='footer'>
      <Logo />
      <div className='footer__form'>
        <span className='form__title'>Подпишитесь на новости</span>
        <span className='form__description'>
          Оставьте свой emeil и вы будите получать актуальную информацию о наших
          акциях и новинках
        </span>
        <div className='form__textfield'>
          <input className='textfield' placeholder='Введите email' />
          <button className='button'>Подписаться</button>
        </div>
      </div>
    </footer>
  </div>
);
