import React from 'react';

const StepsComponent1 = () => {
  return (
    <div className='flex gap-[14px] items-center'>
      <div className='step_btn_title rounded-[200px] w-[136px] h-[48px] flex items-center justify-center bg-[--brand-red]'>
        First Step
      </div>
      <div className='step_text w-1/2'>
        Just choose the fruit you want to order by clicking on the checkboxes
        next to it.
      </div>
    </div>
  );
};

export default StepsComponent1;
