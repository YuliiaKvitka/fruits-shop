import React from 'react';
import Image from 'next/image';
import Img1 from './../../../public/assets/popup/kisspng-strawberry.png';
import { MdOutlineCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const PopupProduct1 = () => {
  return (
    <div className=' relative mx-auto h-[119px] w-[295px]  rounded-[20px] bg-[--color-popup-1] pl-[20px] pr-[20px] pt-[20px] md:h-[250px] md:w-[200px] md:pt-[40px] xl:h-[308px] xl:w-[257px]'>
      <div className='flex justify-between md:flex-col '>
        <div>
          <h3 className='popup_title_plant mb-[2px] md:mb-[4px] xl:mb-[8px]'>
            Strawberry Basket
          </h3>
          <p>Plant</p>
        </div>
        <div className='flex justify-center'>
          <Image
            className='md:h-[148px] md:w-[133px] xl:h-[196px] xl:w-[173px]'
            src={Img1}
            alt=''
            width={88}
            height={95}
          />
        </div>

        <MdOutlineCheckBox className='absolute right-[14px] top-[14px] h-[16px] w-[16px] content-[""]  md:h-[20px] md:w-[20px]' />
        {/* <MdOutlineCheckBoxOutlineBlank /> */}
      </div>
    </div>
  );
};

export default PopupProduct1;
