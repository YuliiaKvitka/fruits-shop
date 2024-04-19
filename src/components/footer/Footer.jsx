import React from 'react';
import Image from 'next/image';
import ImgFooter from './../../../public/assets/fruits/image-footer.jpeg';
import Logo from '../logo/Logo';
import MenuList from '../menu/MenuList';
import SocialList from '../icons/SocialList';
import Phone from '../phone/Phone';
import Address from '../address/Address';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center  justify-center bg-[--color-white] p-[80px_20px] md:flex-row xl:justify-between xl:p-[80px_32px]'>
      <div className='flex flex-col items-center md:w-1/2 md:flex-col  xl:w-2/3 xl:flex-row  xl:justify-between'>
        <div className='md:flex  md:items-center xl:w-1/2 xl:flex-col  '>
          <Image
            className='mb-[20px] h-[172px] w-[335px] rounded-[100px] md:h-[179px] md:w-[349px]'
            src={ImgFooter}
            alt=''
          />
          <Logo />
        </div>
        <MenuList />
      </div>
      <div className='md:flex md:w-1/2 md:flex-col md:items-center xl:w-1/3 xl:items-end'>
        <SocialList />
        <Phone />
        <Address />
      </div>
    </footer>
  );
};

export default Footer;
