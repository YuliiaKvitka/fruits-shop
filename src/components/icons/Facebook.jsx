import React from 'react';
import Image from 'next/image';
import Fb from '/public/assets/icons/facebook.svg';

const Facebook = () => {
  return (
    <div className='box-border cursor-pointer rounded-[10px] border-[1px] border-[--brand-red] p-[8px] hover:bg-[--brand-hover-icons] md:h-[40px] md:w-[40px] xl:h-[44px] xl:w-[44px]'>
      <Image src={Fb} alt='' width={28} height={28} />
    </div>
  );
};

export default Facebook;
