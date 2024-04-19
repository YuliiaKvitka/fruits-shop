import React from 'react';
import Link from 'next/link';

const Phone = () => {
  return (
    <div className='mt-[44px]'>
      <Link className='phone ' href='tel:+380684439426'>
        +380 (68) 443-94-26
      </Link>
    </div>
  );
};

export default Phone;
