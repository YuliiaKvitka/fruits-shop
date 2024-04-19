import React from 'react';

import Arrow from './../arrow/ArrowSVG.jsx';

const BtnOrder = () => {
  return (
    <div className=' btn_order_bg  flex gap-[8px] items-center justify-center bg-[--brand-green]   w-[114px] h-[114px] rounded-[50%] '>
      <Arrow className='arrow ' alt='' width={14} height={14} />
      <div className=' btn_order order '>oRDER</div>
    </div>
  );
};

export default BtnOrder;
