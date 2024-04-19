import React from 'react';
import './BurgerClose.css';
import MenuList from '../menu/MenuList';
import MenuMobile from '../menu/MenuMobile';

const BurgerClose = () => {
  return (
    <div className='md:invisible'>
      <input type='checkbox' class='openSidebarMenu' id='openSidebarMenu' />
      <label for='openSidebarMenu' class='sidebarIconToggle'>
        <div class='spinner diagonal part-1'></div>
        <div class='spinner horizontal'></div>
        <div class='spinner diagonal part-2'></div>
      </label>
      <div className='h-full bg-[--brand-red] bg-cover  ' id='sidebarMenu'>
        <MenuMobile />
      </div>
      <div id='center' class='main center'></div>
    </div>
  );
};

export default BurgerClose;
