import React from "react";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import doict from "../assets/doict.png"
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className='px-0 2xl:px-40 bg-blue-50 p-1 fixed top-0 left-0 w-full z-10 '>
      <div className='w-full items-center justify-between py-4 px-4 md:px-12'>
        <div className='flex items-center justify-between w-full'>
          <div className="flex justify-center items-center gap-2">
          <img className="rounded-sm" src={doict} style={{width:'45px'}} alt="" />
          <a
            href='/'
            className='text-2xl font-bold text-blue-500 cursor-pointer '
          >
            
          </a>
          </div>
          
          <ul className='hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200'>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#home'>হোম</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#about'>আমাদের সম্পর্কে</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#shopService'>সেবা</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#equipments'>সরঞ্জাম</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#agentship'>এজেন্টশিপ</a>
            </li>
            {/* <li className='cursor-pointer hover:text-blue-500'>
              <a href='#hireMe'>Hire Me</a>
            </li> */}
          </ul>
          <button onClick={toggleTheme} className='p-2'>
            {darkMode ? (
              <FiSun size={24} color={"white"} />
            ) : (
              <MdOutlineNightlight size={24} color={"gray"} />
            )}
          </button>

          <div className='md:hidden'>
            <button
              type='button'
              className=''
              aria-controls=',onile-menu'
              aria-expanded='false'
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-700 dark:text-gray-300`}
              />

              <AiOutlineClose
                size={26}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 dark:text-gray-400`}
              />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id='mobile-menu'
        >
          <div className='flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200'>
            <a href='#home' onClick={toggleMenu} className='cursor-pointer'>
              Home
            </a>
            <a href='#about' onClick={toggleMenu} className='cursor-pointer'>
              About
            </a>
            <a href='#projects' onClick={toggleMenu} className='cursor-pointer'>
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
