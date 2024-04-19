import React, { useState } from 'react';
import './style.css';
import ThankYou from '../modal/ThankYou';
import Image from 'next/image';
import Img from './../../../public/assets/popup/raspberry.png';

const FormModal5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class='form_button '>
      <input
        onClick={() => setIsOpen(true)}
        type='submit'
        id='btn'
        className='form__btn absolute  top-[130px] h-[42px] w-[92px] rounded-[100px] bg-[--bg-btn-submit] md:h-[48px] md:w-[114px]'
        value='Submit'
      />
      <label for='btn' class='form__btn'></label>
      {/* -------------------- */}
      <ThankYou isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className='flex flex-col items-center justify-center '>
          <Image
            className='mb-[28px] md:h-[239px] md:w-[278px]'
            src={Img}
            alt=''
            width={207}
            height={176}
          />
          <h2 className='heading2 mb-[14px]'>tHANK YOU</h2>
          <p className='img_p h-[108px] w-[295px] md:h-[72px] md:w-[391px]'>
            Thank you for your order! Our team is preparing your box with fresh,
            delicious fruits and vegetables, and we&prime;ll deliver it straight
            to your doorstep. We appreciate your business and look forward to
            providing you with the best possible experience!
          </p>
        </div>
      </ThankYou>
    </div>
  );
};

export default FormModal5;
