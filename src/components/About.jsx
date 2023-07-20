import React from "react";
import { Profile } from "../assets";
import { FaUserAlt,FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2, } from "react-icons/md";
import { BsWhatsapp,BsLinkedin,BsTwitter,BsFacebook,BsInstagram } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
const About = ({shopInfo}) => {
  const { ShopDescription, Email, Telephone, Mobile, ShopWebsite, FacebookPage, Twitter, Instagram, IsHomeServieAvailable }=shopInfo;
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img
          src={Profile}
          className='h-[276px] p-1 rounded-md ease-in-out duration-300 hover:scale-125'
        />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black dark:text-white  '>
        আমাদের সম্পর্কে
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
          {ShopDescription}
        </p>

        <div
          className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaUserAlt size={14} /> Riasat Raihan Noor
          </p>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdOutlineAlternateEmail size={14} /> {Email}
          </p>
          {/* <a
            href='https://wa.me/+11 234 567 897'
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <BsWhatsapp size={14} /> +880 1672 702437
          </a> */}
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdWifiCalling2 size={14} /> {Mobile}
          </p>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaPhone size={14} /> {Telephone}
          </p>
          {ShopWebsite!=='নাই' && <a target="_blank" rel="noopener" href={ShopWebsite} 
          className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <TbWorldWww size={14} /> {ShopWebsite}
          </a>}
          {FacebookPage!=='নাই' && <a target="_blank" rel="noopener" href={FacebookPage} 
          className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <BsFacebook size={14} /> {FacebookPage}
          </a>}
          {Twitter!=='নাই' && <a target="_blank" rel="noopener" href={Twitter} 
          className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <BsTwitter size={14} /> {Twitter}
          </a>}
          {Instagram!=='নাই' && <a target="_blank" rel="noopener" href={Instagram} 
          className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <BsInstagram size={14} /> {Instagram}
          </a>}

        </div>
      </div>
    </div>
  );
};

export default About;
