import React from 'react';
import Image from 'next/image';
import Img5 from './../../../public/assets/fruits/product-5.png';

const Product5 = () => {
  return (
    <div className=' h-[465px] w-[335px] rounded-[20px] bg-[--color-card-red] px-[24px]  pt-[64px] md:w-[344px] xl:w-[389px]'>
      <h4 className='img_title '>Apple</h4>
      <p className='img_p mt-[8px]'>Plant</p>
      <div className='h-[251px] w-[295px]'>
        <Image src={Img5} alt='' width={295} height={251} />
      </div>
      <div className='price_text mt-[22px] flex h-[42px] w-[126px] items-center justify-center rounded-[200px] bg-[--color-white] p-[24px_16px]'>
        60 UAH / kg
      </div>
    </div>
  );
};

export default Product5;
