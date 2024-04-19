import React from 'react';
import Logo from '../logo/Logo';
import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';
import BtnShopNow from '../buttons/BtnShopNow';
import BtnOrder from '../buttons/BtnOrder';
import Burger from './../burger/Burger.jsx';
import BurgerClose from '../burger/BurgerClose';
import MenuList from '../menu/MenuList';
import Cart from '../icons/Cart';
import CartHeader from '../icons/CartHeader';

const Header = () => {
  return (
    <header className='relative flex h-[50px] items-center  justify-between p-[13px_13px_13px_20px] md:p-[16px_32px]'>
      <MenuList />
      <Logo className='' />
      <BurgerClose />
      <div className='hidden md:block'>
        <CartHeader />
      </div>
    </header>
  );
};

export default Header;
