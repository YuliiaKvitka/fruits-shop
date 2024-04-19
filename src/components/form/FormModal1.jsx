import React from 'react';
import './style.css';

const FormModal1 = () => {
  return (
    <div class='form'>
      <input
        type='text'
        id='fullName'
        class='form__input'
        autocomplete='off'
        placeholder=' '
      />
      <label for='fullName' class='form__label text-[black]'>
        Enter full name...
      </label>
      {/* -------------------- */}
    </div>
  );
};

export default FormModal1;
