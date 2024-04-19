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

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal_wrapper'>
            <div className='modal_content relative'>
              <div className='flex items-center p-[20px] md:p-[40px]'>
                <button
                  className='modal_close_button'
                  onClick={() => onClose()}
                >
                  <IoMdClose fill='var(--brand-red)' size={24} />
                </button>
                {children}
              </div>
              {/* ---------------------------- */}
              <div className=' flex flex-col gap-[12px] md:mx-auto md:w-[624px] md:flex-row xl:w-[811px]'>
                <PopupProduct1 />
                <PopupProduct2 />
                <PopupProduct3 />
              </div>
              {/* ------------------------------------------- */}
              <div className='form_modal mt-[40px] flex  flex-col gap-[14px] md:ml-[40px] md:mt-[40px] '>
                <FormModal1 />
                <FormModal2 />
                <FormModal3 />
                <FormModal4 />
                <FormModal5 />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
