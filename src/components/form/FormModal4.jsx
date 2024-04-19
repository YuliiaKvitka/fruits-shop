import React from 'react';
import './style.css';

const FormModal4 = () => {
  return (
    <div class='form_text'>
      <textarea
        type='text'
        className='form__textarea absolute h-[132px] w-[295px] rounded-[20px] border-[1px] border-[black] p-[1.25rem] text-[16px] text-[black]'
        id='textComment'
        name='textComment'
        placeholder=' '
      ></textarea>
      <label for='textComment' class='form__label text-[black]'>
        Enter comments...
      </label>
    </div>
  );
};

export default FormModal4;
