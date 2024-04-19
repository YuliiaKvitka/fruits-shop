'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import MainImg1 from './../../../public/assets/fruits/main-image.jpeg';
import MainImg from './../../../public/assets/main-mob@1x.png';
import Watermelon from './../../../public/assets/fruits/image-3.png';
import Strawberry from './../../../public/assets/fruits/strawberry.png';
import Oval from './../../../public/assets/fruits/oval.png';
import Image1 from './../../../public/assets/fruits/image-1.png';

import BtnShopNow from '../buttons/BtnShopNow';

import Btn from '../buttons/Btn';
import StepsComponent1 from '../stepsComponent/StepsComponent1';
import StepsComponent2 from '../stepsComponent/StepsComponent2';
import StepsComponent3 from '../stepsComponent/StepsComponent3';
import GIF from './../../../public/assets/gif/gif-335.png';
import Product1 from '../imgFruit/Product1';
import Product2 from '../imgFruit/Product2';
import Product3 from '../imgFruit/Product3';
import Product4 from '../imgFruit/Product4';
import Product5 from '../imgFruit/Product5';
import Product6 from '../imgFruit/Product6';
import BtnOrder from '../buttons/BtnOrder';
import Modal from './../../components/modal/Modal.jsx';
import './style.css';
import Input from '../form/input/Input';

const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='h-full bg-[--brand-red] md:pb-[144px] xl:pb-[150px]'>
      <div className='   ml-[20px] mr-[20px]  '>
        <div className='relative flex h-auto w-full justify-center pt-[116px]'>
          <h1 className='  heading1 absolute top-[56px] z-[10] w-[20.9375rem] md:w-[44rem] xl:w-[56.125rem] '>
            fresh harvest box is your one-stop place for a delicious fruit
            basket
          </h1>
          <picture className='img   w-[311px] rounded-[500px] object-cover md:w-[452px] '>
            <source
              srcSet='/assets/main-mob@1x.png 1x, /assets/main-mob@2x.png 2x'
              media='(max-width:375px)'
            />
            <img
              src='/assets/main-desktop@1x.png'
              srcSet=' /assets/main-desktop@2x.png 2x'
              alt=''
            />
          </picture>
          <div className=' absolute left-[240px] top-[520px] md:left-[400px] md:top-[720px] xl:left-[550px] '>
            <BtnShopNow />
          </div>
        </div>
      </div>

      <div className=' grid  md:grid-cols-2'>
        <div className='m-auto mt-[70px] w-[300px] md:order-1 md:h-[90px] xl:ml-[62px] xl:mt-[-420px] xl:w-[222px]'>
          <p className='p_text '>
            Our expertly curated fruit baskets are made with the freshest,
            highest quality fruits available. Whether you are looking for a
            healthy snack or a gift for a loved one, Fresh Harvest Box has got
            you covered.
          </p>
        </div>
        {/* -------------------------------- */}

        <div className=' relative m-auto  mb-[44px] mt-[44px] flex h-[387px] w-[249px] flex-col items-center justify-center rounded-[500px] bg-[--brand-green] md:order-3 md:mt-[-300px] xl:ml-[62px] xl:mt-[-280px]'>
          <h5 className='heading5 absolute left-[110px] top-[28px] content-[""]'>
            Fruit
          </h5>
          <Image
            className=''
            src={Watermelon}
            alt=''
            width={200}
            height={172}
          />
          <Image
            className='absolute bottom-[90px] left-[0px] content-[""]'
            src={Oval}
            alt=''
            width={239}
            height={38}
          />
          <h4 className='heading4 absolute bottom-[28px] left-[48px] w-[155px] content-[""]'>
            Refreshing and juicy, watermelon is the perfect summer treat and a
            great source of hydration
          </h4>
        </div>
        {/* ------------------------------------------- */}
        <div className=' mb-[44px] ml-[55px] mr-[55px] md:order-4 xl:mr-[-170px] xl:mt-[-100px]'>
          <Btn />
        </div>
        {/* ------------------------------------------- */}
        <div className='relative m-auto  mb-[44px] mt-[44px] flex h-[387px] w-[249px] flex-col items-center justify-center rounded-[500px] bg-[--brand-yellow] md:order-2 md:mt-[70px] xl:mr-[62px] xl:mt-[-510px]'>
          <h5 className='heading5 absolute left-[110px] top-[28px] content-[""]'>
            Fruit
          </h5>
          <Image
            className=''
            src={Strawberry}
            alt=''
            width={162}
            height={185}
          />
          <Image
            className='absolute bottom-[90px] left-[0px] content-[""]'
            src={Oval}
            alt=''
            width={239}
            height={38}
          />
          <h4 className='heading4 absolute bottom-[28px] left-[48px] w-[163px] content-[""]'>
            Sweet and juicy, strawberries are packed with vitamin C and
            antioxidants, making them a delicious and healthy snack
          </h4>
        </div>
      </div>
      {/* ----------------------------------------------- */}
      <div className='mx-auto mt-[82px] w-[335px] md:w-[624px] xl:w-[674px]'>
        <h2 className='heading2 mb-[14px]'>
          To order your fruit basket, simply follow these easy steps
        </h2>
        <div className='mx-auto md:w-[522px] '>
          <h3 className='heading3 '>
            Our baskets are assembled with care and delivered straight to your
            doorstep, so you can enjoy the taste of fresh fruit without ever
            leaving your home. Whether you&prime;re looking for a healthy snack
            or a thoughtful gift, our fruit baskets are the perfect choice.
          </h3>
        </div>
      </div>
      {/* -------------------------------------------------- */}

      <div className=' flex flex-col items-center gap-[20px] py-[44px] xl:flex-row xl:justify-center'>
        <div className='ml-[20px] mr-[20px] flex  h-[112px] w-[335px] items-center rounded-[20px] bg-[--color-white] p-[20px]'>
          <StepsComponent1 />
        </div>
        <div className='ml-[20px]  mr-[20px] flex h-[112px] w-[335px] items-center rounded-[20px] bg-[--color-white] p-[20px]'>
          <StepsComponent2 />
        </div>
        <div className='ml-[20px]  mr-[20px] flex h-[112px] w-[335px] items-center rounded-[20px] bg-[--color-white] p-[20px]'>
          <StepsComponent3 />
        </div>
      </div>
      {/* ------------------------------------------------- */}
      <div className='flex justify-center  pb-[80px]'>
        {/* <Image className='m-auto' src={GIF} alt='' width={335} height={476} /> */}

        <picture className=' m-[0px] h-[476px] w-[335px]  md:w-[704px] xl:w-[860px] '>
          <source
            srcSet='/assets/gif/gif-mob@1x.jpeg 1x, /assets/gif/gif-mob@2x.jpeg 2x'
            media='(max-width:768px)'
          />
          <img
            className='rounded-[20px]'
            src='/assets/gif/gif-desktop@1x.jpeg'
            srcSet=' /assets/gif/gif-desktop@2x.jpeg 2x'
            alt=''
            width={860}
            height={476}
          />
        </picture>
      </div>
      {/* ------------------------------------------------------- */}
      <div className='mx-auto w-[335px] md:w-[624px]'>
        <h2 className='heading2'>oRGANIC fRUITS</h2>
        <p className='p_text m-auto mt-[14px] text-center md:w-[547px]'>
          Our organic fruits are hand-picked from local farms and delivered
          straight to your doorstep, ensuring that you get the freshest and most
          nutritious produce possible. We offer a wide selection of organic
          fruits grown without the use of harmful pesticides or chemicals.
        </p>
      </div>
      {/* ------------------------------------------------------------ */}
      <div className=' flex flex-col items-center justify-center gap-[14px] pb-[44px] pt-[44px] md:flex-row md:flex-wrap md:gap-[24px] '>
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
        <Product5 />
        <Product6 />
      </div>
      {/* -------------------------------------- */}
      <div className=''>
        <div className='flex items-center justify-center '>
          <button onClick={() => setIsOpen(true)}>
            <BtnOrder />
          </button>
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className='heading2_red  '> Your Order</h2>
        </Modal>
      </div>
      {/* ------------------------------------------------------ */}
      <div className='relative mt-[133px] flex  justify-center gap-[16px]  pb-[80px] xl:h-[502px]'>
        <picture className=' m-[0px] h-[476px] w-[335px]  md:h-[480px] md:w-[344px] xl:h-[502px] xl:w-[792px] '>
          <source
            srcSet='/assets/fruits/rec-1-mob@1x.jpeg 1x, /assets/gif/rec-1-mob@2x.jpeg 2x'
            media='(max-width:1280px)'
          />
          <img
            className='h-[502px] w-[792px] rounded-[20px]'
            src='/assets/fruits/rec-1-desktop@1x.jpeg'
            srcSet=' /assets/fruits/rec-1-desktop@2x.jpeg 2x'
            alt=''
            width={792}
            height={502}
          />
        </picture>
        <picture className='m-[0px]  sm:hidden md:block md:h-[480px] md:w-[344px]   xl:h-[502px] xl:w-[400px] '>
          <source
            srcSet='/assets/fruits/rec-2-mob@1x.jpeg 1x, /assets/gif/rec-2-mob@2x.jpeg 2x'
            media='(max-width:768px)'
          />
          <img
            className='h-[502px] w-[400px] rounded-[20px]'
            src='/assets/fruits/rec-2-desktop@1x.jpeg'
            srcSet=' /assets/fruits/rec-2-desktop@2x.jpeg 2x'
            alt=''
            width={400}
            height={502}
          />
        </picture>

        <h2 className='order_text absolute left-[190px]  top-[-55px] w-[335px] content-[""] md:left-[200px]  md:top-[-70px] md:w-[648px] xl:left-[270px] xl:top-[-90px] xl:w-[740px]'>
          Fresh Harvest Box has got you covered
        </h2>
      </div>
      {/* -------------------------------------- */}
      <div className='sm:hidden md:block xl:mt-[80px] '>
        <p className='p_text mx-auto mb-[80px] md:w-[492px]'>
          Our boxes are packed with delicious, nutritious fruits and vegetables,
          perfect for anyone looking to eat healthier or support local farmers.
          Order your box today and start enjoying the best that nature has to
          offer!
        </p>

        <Input />
      </div>
    </div>
  );
};

export default HomeComponent;
