import React from 'react';
import Image from 'next/image';
import Img2 from './../../../public/assets/fruits/product-2.png';

const Product2 = () => {
  return (
    <div className='h-[465px] w-[335px] rounded-[20px] bg-[--color-card-yellow] px-[24px] pt-[64px] md:w-[344px] xl:w-[389px]'>
      <h4 className='img_title '>Banana</h4>
      <p className='img_p mt-[8px]'>Plant</p>
      <div className='h-[251px] w-[295px]'>
        <Image src={Img2} alt='' width={295} height={251} />
      </div>
      <div className='price_text mt-[22px] flex h-[42px] w-[126px] items-center justify-center rounded-[200px] bg-[--color-white] p-[24px_16px]'>
        80 UAH / kg
      </div>
    </div>
  );
};

export default Product2;
