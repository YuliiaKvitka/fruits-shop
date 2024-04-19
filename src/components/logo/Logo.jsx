import React from 'react';
import Image from 'next/image';
import LogoImg from '/public/assets/logo.svg';

const Logo = () => {
  return (
    <div className='flex items-center gap-[8px] cursor-pointer'>
      <Image src={LogoImg} alt='' width={16} height={16} />
      <span className='logo'>fresh harvest box</span>
    </div>
  );
};

export default Logo;
