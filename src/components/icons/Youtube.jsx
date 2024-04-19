import React from 'react'
import Image from 'next/image'
import Yt from '/public/assets/icons/youtube.svg'

const Youtube = () => {
  return (
    <div className='rounded-[10px] md:h-[40px] xl:w-[44px] hover:bg-[--brand-hover-icons] box-border cursor-pointer border-[1px] border-[--brand-red] p-[8px] md:w-[40px] xl:h-[44px]'>
      <Image src={Yt} alt='' width={28} height={28} />
    </div>
  );
}

export default Youtube
