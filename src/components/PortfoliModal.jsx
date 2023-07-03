import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const PortfolioModal = ({ portfolioId, showModal, onClose }) => {

  const [portfolio, setPortfolio] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const loadData = async () => {
    const portfolioDataLoader = await fetch('/projects.json');
    const portfolioData = await portfolioDataLoader.json();
    return portfolioData;
  }
  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (showModal && portfolioId) {
        const portfolioData = await loadData();
        const portfolioItem = portfolioData.find((item) => parseInt(item.id) === parseInt(portfolioId));
        setPortfolio(portfolioItem);
        setIsDataLoaded(true);
      }
    };
    fetchPortfolioData();
  }, [showModal, portfolioId]);

  useEffect(() => {
    if (isDataLoaded && window.my_modal_5 && window.my_modal_5.showModal) {
      window.my_modal_5.showModal();
      setIsDataLoaded(false);
    }
  }, [isDataLoaded]);

  return (
    <>
      {showModal && portfolio && (
        <dialog id="my_modal_5" className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <Swiper
              pagination={{
                type: 'progressbar',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {portfolio.images.map((image, key) => (
                <SwiperSlide key={key}>
                  <img src={image} className='rounded-lg' alt="" />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className='flex justify-between mt-5'>
              <h3 className="font-bold text-lg">{portfolio.title} <span className="badge badge-secondary">{portfolio.cat}</span></h3>
              <div className='flex flex-col md:flex-row gap-1'>
                <span className="badge badge-primary"><a href={portfolio.live_url} target="_blank" rel="noopener noreferrer">Live Demo</a></span>
                {portfolio.client_repo && <span className="badge badge-primary"><a href={portfolio.client_repo} target="_blank" rel="noopener noreferrer">Client Repo</a></span>}
                {portfolio.server_repo && <span className="badge badge-primary"><a href={portfolio.server_repo} target="_blank" rel="noopener noreferrer">Server Repo</a></span>}
                {portfolio.presentation && <span className="badge badge-primary"><a href={portfolio.presentation} target="_blank" rel="noopener noreferrer">Video Presentation</a></span>}
                {portfolio.manual?.length && portfolio.manual.map((manual,key)=> <span className="badge badge-primary" key={key}><a href={manual} target="_blank" rel="noopener noreferrer">manual {key+1}</a></span>) }
              </div>
            </div>

            <p className="py-4">{portfolio.description}</p>
            {portfolio.technologies.map((tech,key)=> <div className="badge badge-neutral ml-2 mt-2 p-4 font-bold" key={key}>{tech}</div>)}    
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

export default PortfolioModal;