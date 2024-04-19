import React from 'react';
import Image from 'next/image';
import Img3 from './../../../public/assets/fruits/product-3.png';

const Product3 = () => {
  return (
    <div className=' h-[465px] w-[335px] rounded-[20px] bg-[--color-card-green] px-[24px]  pt-[64px] md:w-[344px] xl:w-[389px]'>
      <h4 className='img_title '>Watermelon</h4>
      <p className='img_p mt-[8px]'>Plant</p>
      <div className='h-[251px] w-[295px]'>
        <Image src={Img3} alt='' width={295} height={251} />
      </div>
      <div className='price_text mt-[22px] flex h-[42px] w-[126px] items-center justify-center rounded-[200px] bg-[--color-white] p-[24px_16px]'>
        40 UAH / kg
      </div>
    </div>
  );
};

export default Product3;
