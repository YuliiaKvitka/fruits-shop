import React from 'react';
import Image from 'next/image';
import Img1 from './../../../public/assets/popup/fruits.png';
import { MdOutlineCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const PopupProduct3 = () => {
  return (
    <div className='relative  m-auto h-[119px] w-[295px]  rounded-[20px] bg-[--color-popup-3] pl-[20px] pr-[20px] pt-[20px] md:h-[250px] md:w-[200px] md:pl-[20px] md:pt-[40px] xl:h-[308px] xl:w-[257px]'>
      <div className='flex  justify-between md:flex-col '>
        <div>
          <h3 className='popup_title_plant mb-[2px] md:mb-[4px] xl:mb-[8px]'>
            Fruits Basket
          </h3>
          <p>Plant</p>
        </div>
        <div className='flex  justify-center'>
          <Image
            className='md:h-[148px] md:w-[133px] xl:h-[196px] xl:w-[173px]'
            src={Img1}
            alt=''
            width={88}
            height={95}
          />
        </div>
        {/* <MdOutlineCheckBox /> */}
        <MdOutlineCheckBoxOutlineBlank className='absolute right-[14px] top-[14px] h-[16px] w-[16px] content-[""]  md:h-[20px] md:w-[20px] ' />
      </div>
    </div>
  );
};

export default PopupProduct3;
