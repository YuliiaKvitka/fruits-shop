import React from 'react';
import Image from 'next/image';
import Cart1 from '/public/assets/icons/cartRed.svg';

const CartHeader = () => {
  return (
    <div className='box-border h-[44px] w-[44px] cursor-pointer rounded-[10px] border-[1px] border-[--brand-red] p-[8px] hover:bg-[--brand-hover-icons]'>
      <Image src={Cart1} alt='' width={28} height={28} />
    </div>
  );
};

export default CartHeader;
