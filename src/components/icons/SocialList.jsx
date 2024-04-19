import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Youtube from './Youtube';
import Link from 'next/link';

const SocialList = () => {
  return (
    <ul className='flex gap-[20px] mt-[44px]'>
      <li>
        <Link href='##'>
          <Facebook />
        </Link>
      </li>
      <li>
        <Link href='##'>
          <Instagram />
        </Link>
      </li>
      <li>
        <Link href='##'>
          <Youtube />
        </Link>
      </li>
    </ul>
  );
};

export default SocialList;
