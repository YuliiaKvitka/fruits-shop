import React from 'react';

const Btn = () => {
  return (
    <div className=' mx-auto grid w-[249px] grid-cols-2 gap-[8px]'>
      <div className='btn_title h-[38px] w-[125px] rounded-[1000px] border-[1px] border-[--color-white] p-[12px_32px]'>
        #organic
      </div>
      <div className='btn_title h-[38px] w-[125px] rounded-[1000px]  border-[1px] border-[--color-white] p-[12px_32px]'>
        #products
      </div>
      <div className='btn_title h-[38px] w-[125px] rounded-[1000px]  border-[1px] border-[--color-white] p-[12px_32px]'>
        #basket
      </div>
      <div className='btn_title h-[38px] w-[125px] rounded-[1000px]  border-[1px] border-[--color-white] p-[12px_32px]'>
        #fruits
      </div>
    </div>
  );
};
export default Btn;
