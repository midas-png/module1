import { Assets } from 'assets';
import { GiCancel } from 'react-icons/gi';
import './styles.css';

export const Sidebar = ({ isOpen, onCancel }) => {
  return (
    <div className={`sidebar ${!isOpen && 'sidebar_closed'}`}>
      <GiCancel className='sidebar__cancel' onClick={onCancel} />
      <span className='menu__item'>Главная</span>
      <span className='menu__item'>Каталог</span>
      <span className='menu__item'>Блог</span>
      <span className='menu__item'>Решения</span>
      <span className='menu__item'>Контакты</span>
      <div className='sidebar__icons'>
        <Assets.SVGSearch />
        <Assets.SVGBasket />
      </div>
    </div>
  );
};
