import { useState } from 'react';
import { Assets } from 'assets';
import { Logo } from 'ui';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Sidebar } from 'components';
import './styles.css';

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className='header'>
      <Logo />
      <div className='header__menu'>
        <span className='menu__item'>Главная</span>
        <span className='menu__item'>Каталог</span>
        <span className='menu__item'>Блог</span>
        <span className='menu__item'>Решения</span>
        <span className='menu__item'>Контакты</span>
      </div>
      <div className='header__icons'>
        <Assets.SVGSearch />
        <Assets.SVGBasket />
      </div>
      <GiHamburgerMenu
        className='burgermenu'
        onClick={() => setSidebarOpen(true)}
      />
      <Sidebar isOpen={isSidebarOpen} onCancel={() => setSidebarOpen(false)} />
    </header>
  );
};
