import React from 'react';
import Link from 'next/link';

const MenuList = () => {
  return (
    <ul className='menu_li mt-[24px] gap-[20px] sm:hidden md:flex md:flex-row   '>
      <li>
        <Link href='##'>How It Works</Link>
      </li>
      <li>
        <Link href='##'>Fruits</Link>
      </li>
      <li>
        <Link href='##'>Contacts</Link>
      </li>
    </ul>
  );
};

export default MenuList;
