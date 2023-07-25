import React, { useState } from "react";
import { projects } from "../data";
import PortfolioModal from "./PortfoliModal";

const Works = ({shopAgent,baseUrl}) => {

  const [activePortfolio, setActivePortfolio] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (portfolioId) => {
    console.log(portfolioId);
    setActivePortfolio(portfolioId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActivePortfolio(null);
  };

  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
      <h4 className='text-3xl font-bold text-black dark:text-white mt-10 text-center'>
      এজেন্টশিপ 
      </h4>

      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center '>
        {shopAgent && shopAgent.map((agent, index) => (
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            key={index}
            className='relative w-[350px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 border border-gray-600 dark:border-gray-200 rounded-lg'
          >
            <img
              src={baseUrl+'/ShopPublicImages/agent/'+agent.ProofImageSerial}
              alt={agent.IssueingOrganization}
              className='w-full h-[250px] object-cover rounded-md p-2'
            />

            <div className='w-full  bg-white dark:bg-[#04133e]'>
              <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1 '>
                {agent.IssueingOrganization}
              </h4>
              <p className='text-sm text-orange-600 px-1 uppercase'></p>
            </div>

            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-90 ">
              <p className="py-5 text-center font-bold px-2 text-white">
              {agent.IssueingOrganization}
              </p>

              <div className="mx-auto">
                <a
                  onClick={() => handleShowDetails(agent.serial)}
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                >
                  Show Details
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
      <PortfolioModal
        portfolioId={activePortfolio}
        showModal={showModal}
        shopAgent={shopAgent}
        baseUrl={baseUrl}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Works;
