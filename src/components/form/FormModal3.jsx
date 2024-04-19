import React from 'react';
import './style.css';

const FormModal3 = () => {
  return (
    <div class='form'>
      <input
        type='text'
        id='card'
        class='form__input'
        autocomplete='off'
        placeholder=' '
      />
      <label for='card' class='form__label text-[black]'>
        Enter card..
      </label>
      {/* -------------------- */}
    </div>
  );
};

export default FormModal3;
