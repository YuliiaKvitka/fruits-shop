import React from 'react';

const Input = () => {
  return (
    <div class='form1'>
      <input
        type='text'
        id='fullName'
        class='form__input1 relative'
        autocomplete='off'
        placeholder=' '
      />
      <label for='fullName' class='form__label1 text-[white]'>
        Enter email...
      </label>
      <button
        type='submit'
        className='absolute right-[0px] top-[0px] h-[48px] w-[102px] rounded-[100px] bg-[--bg-btn-submit]'
      >
        Send
      </button>
    </div>
  );
};

export default Input;
