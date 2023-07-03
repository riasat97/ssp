import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp,BsLinkedin,BsGithub } from "react-icons/bs";

const About = () => {
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
          About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
          Full-Stack Web Developer with a proven ability to adapt and collaborate effectively in rapidly changing environments. I have dedicated hours to honing my skills through structured bootcamps, mastering JavaScript, Node.js, React.js, Next.js, and TypeScript. My passion lies in tackling web development and design challenges, with the aim of creating lasting impacts on user experience. I am eager to contribute my expertise to create innovative and seamless web solutions.
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
            <MdOutlineAlternateEmail size={14} /> riasatraihan@gmail.com
          </p>
          <a
            href='https://wa.me/+11 234 567 897'
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <BsWhatsapp size={14} /> +880 1672 702437
          </a>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdWifiCalling2 size={14} /> +880 1534 205003
          </p>
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/riasatraihan/" 
          className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <BsLinkedin size={14} /> riasatraihan
          </a>
          <a target="_blank" rel="noopener" href="https://github.com/riasat97" 
          className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <BsGithub size={14} /> riasat97
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
