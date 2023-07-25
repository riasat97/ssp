import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Equipments from "./components/Equipments";
import Works from "./components/Works";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import HireMeForm from "./components/HireMe";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ShopServiceCard from "./components/ShopServiceCard";

AOS.init();

function App() {
  const baseUrl= 'http://ssp.gov.bd/api';
  const viaAxios = axios.create({
    baseURL: 'http://ssp.gov.bd/api',
  });
  let target= document.getElementById('target-shop');
  let targetVal= target? target.value:'shafique';

  const { data: shop = [], refetch } = useQuery(['shop'], async () => {
    const res = await viaAxios.get(`ShopPage/GetShopCache/${targetVal}`);
    return res.data;
  });
  const { ShopUrl, shopView, shopInfo, shopTeam, shopService,shopEquipment,shopAgent } = shop;
  
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}
    >
      <div className='w-full h-full min-h-[100vh] bg-white '>
        <div className='dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]'>
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />

          {shopView &&  <section id='home' className='px-0 lg:px-5 2xl:px-40 py-0 lg:py-0'>
            <Header shopView={shopView} shopTeam={shopTeam} shopInfo={shopInfo} baseUrl={baseUrl}/>
          </section>}
        </div>

        <section id='shopService' className='w-full px-0 lg:px-10 2xl:px-40 py-20 lg:py-20 bg-[#061130]'>
          {/* <Project /> */}
          <h4 className='text-3xl font-bold text-black dark:text-white mb-10 text-center'>
            সেবা
          </h4>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 p-2">
            {shopService && shopService.map((service, index) => (
              <ShopServiceCard key={index} shopService={service} baseUrl={baseUrl}/>
            ))}
          </div>
        </section>

        {shopInfo && <section
          id='about'
          className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]'
        >
          <About shopInfo={shopInfo} />
        </section>}

        <section
          id='equipments'
          className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]'
        >
          <Equipments shopEquipment={shopEquipment} baseUrl={baseUrl}/>
        </section>

        <section
          id='agentship'
          className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]'
        >
          <Works shopAgent={shopAgent} baseUrl={baseUrl}/>
        </section>

        {/* <section
          id='hireMe'
          className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]'
        >
          <HireMeForm></HireMeForm>
        </section> */}

        <div className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] '>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
