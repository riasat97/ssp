import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const PortfolioModal = ({ portfolioId, showModal, shopAgent, onClose, baseUrl }) => {
  const [portfolio, setPortfolio] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  console.log(portfolio, showModal, baseUrl);
  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (showModal && portfolioId && shopAgent) {
        const portfolioData = shopAgent;
        const portfolioItem = portfolioData.find((item) => parseInt(item.serial) === parseInt(portfolioId));
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
              <SwiperSlide >
                <img src={baseUrl + '/ShopPublicImages/agent/' + portfolio.ProofImageSerial} className='rounded-lg' alt="" />
              </SwiperSlide>
            </Swiper>

            <div className='flex flex-col mt-5'>
              <h3 className="font-bold text-lg mb-10">{portfolio.IssueingOrganization} <span className="badge badge-secondary">{portfolio.AgentshipType}</span></h3>
              
              <div className='flex flex-col gap-1'>
                {portfolio.IssueDate && <span className="badge badge-primary p-5"> ইস্যুর তারিখ: {portfolio.IssueDate}</span>}
                {portfolio.StartDate && <span className="badge badge-primary p-5"> শুরুর তারিখ: {portfolio.StartDate} </span>}
                {portfolio.ExpiryDate && <span className="badge badge-primary p-5"> মেয়াদ শেষ হওয়ার তারিখ: {portfolio.ExpiryDate}</span>}
                {portfolio.OnlineIssueUrl !== 'none' && <span className="badge badge-primary p-5"><a href={portfolio.OnlineIssueUrl} target="_blank" rel="noopener noreferrer">অনলাইন ইস্যু ইউআরএল</a></span>}
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </div>

            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

export default PortfolioModal;