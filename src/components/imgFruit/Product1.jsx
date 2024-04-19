import React from 'react';
import Image from 'next/image';
import Img1 from './../../../public/assets/fruits/product-1.png';

const Product1 = () => {
  return (
    <div className='h-[465px] w-[335px] rounded-[20px] bg-[--color-card-roze]  px-[24px] pt-[64px] md:w-[344px] xl:w-[389px]'>
      <h4 className='img_title '>Strawberry</h4>
      <p className='img_p mt-[8px]'>Plant</p>
      <div className='h-[251px] w-[295px]'>
        <Image src={Img1} alt='' width={295} height={251} />
      </div>
      <div className='price_text mt-[22px] flex h-[42px] w-[126px] items-center justify-center rounded-[200px] bg-[--color-white] p-[24px_16px]'>
        100 UAH / kg
      </div>
    </div>
  );
};

export default Product1;
