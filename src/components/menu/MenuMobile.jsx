import React from 'react';
import Link from 'next/link';
import Cart from '../icons/Cart';

const MenuMobile = () => {
  return (
    <ul className='  menu_mobile py-[124px] bg-[--brand-red]  h-[100vh] w-full flex flex-col items-center gap-[20px] z-100 '>
      <li>
        <Link href='##'>How It Works</Link>
      </li>
      <li>
        <Link href='##'>Fruits</Link>
      </li>
      <li>
        <Link href='##'>Contacts</Link>
      </li>
      <li>
        <Link href='##'>
          <Cart />
        </Link>
      </li>
    </ul>
  );
};

export default MenuMobile;
