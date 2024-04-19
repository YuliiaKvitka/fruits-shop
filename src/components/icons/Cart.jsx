import React from 'react';
import Image from 'next/image';
import Cart1 from '/public/assets/icons/cart.svg';

const Cart = () => {
  return (
    <div className='p-[8px] border-[--brand-red] border-[1px] rounded-[10px] w-[44px] h-[44px] hover:bg-[--brand-hover-icons] cursor-pointer box-border'>
      <Image src={Cart1} alt='' width={28} height={28} />
    </div>
  );
};

export default Cart;
