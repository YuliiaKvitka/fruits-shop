import React from 'react';
import './style.css';
import { IoMdClose } from 'react-icons/io';
import PopupProduct1 from './Product1';
import PopupProduct2 from './Product2';
import PopupProduct3 from './Product3';
import FormModal1 from '../form/FormModal1';
import FormModal2 from '../form/FormModal2';
import FormModal3 from '../form/FormModal3';
import FormModal4 from '../form/FormModal4';
import FormModal5 from '../form/FormModal5';

const ThankYou = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className=' modal'>
          <div className='modal_wrapper '>
            <div className='modal_content1   bg-[ --bg-popup] '>
              <div className='flex h-[426px] w-[335px]  justify-center p-[20px] md:h-[545px] md:w-[600px]  '>
                <button
                  className='modal_close_button'
                  onClick={() => onClose()}
                >
                  <IoMdClose fill='var(--brand-red)' size={24} />
                </button>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThankYou;
