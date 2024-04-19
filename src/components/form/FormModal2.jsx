import React from 'react';
import './style.css';

const FormModal2 = () => {
  return (
    <div class='form'>
      <input
        type='text'
        id='email'
        class='form__input'
        autocomplete='off'
        placeholder=' '
      />
      <label for='email' class='form__label text-[black]'>
        Enter email...
      </label>
      {/* -------------------- */}
    </div>
  );
};

export default FormModal2;
